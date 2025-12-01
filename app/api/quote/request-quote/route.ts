// app/api/quote/request-quote/route.ts

import { Resend } from "resend";
import { CustomerConfirmationEmail } from "@/components/emails/CustomerConfirmationEmail";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// ---------- Helpers ----------
const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const nl2brSafe = (v: unknown) =>
  typeof v === "string" ? escapeHtml(v).replace(/\n/g, "<br />") : "";

const eur = (n?: number) => {
  if (typeof n !== "number" || Number.isNaN(n)) return "€0";
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
};

type ItemDetailed = {
  id: string;
  name: string;
  volumeM3: number;
  surchargeEUR: number;
  qty: number;
};

// ---------- Main Handler ----------
export async function POST(req: Request) {
  const body = await req.json();

  // Old payload fields (back-compat)
  const name: string = body?.name ?? "";
  const email: string = body?.email ?? "";
  const phone: string = body?.phone ?? "";
  const pickup: string = body?.pickup ?? "";
  const destination: string = body?.destination ?? "";
  const date: string = body?.date ?? "";
  const size: string = body?.size ?? "";
  const itemsStr: string = body?.items ?? ""; // old free-text items
  const notes: string = body?.notes ?? "";

  // New estimator fields
  const distanceKm: number = body?.distanceKm ?? 0;
  const driveDurationMin: number = body?.driveDurationMin ?? 0;
  const quantities: Record<string, number> = body?.quantities ?? {};
  const itemsDetailed: ItemDetailed[] = Array.isArray(body?.itemsDetailed)
    ? body.itemsDetailed
    : [];

  const totals: {
    items?: number;
    volumeM3?: number;
    handlingSurchargesEUR?: number;
    distanceCostEUR?: number;
    accessCostEUR?: number;
    subtotalEUR?: number;
    vatEUR?: number;
    totalEUR?: number;
  } = body?.totals ?? {};

  const pricing = body?.pricing ?? {};

  // ---------- Build the HTML ----------
  const hasQuantities =
    quantities && Object.keys(quantities).length > 0;
  const hasItemsDetailed = itemsDetailed.length > 0;

  const itemsHtml =
    hasItemsDetailed
      ? `
        <h3 style="margin:12px 0 6px">Items</h3>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;border:1px solid #eee;">
          <thead>
            <tr style="background:#f8f8f8">
              <th align="left">Item</th>
              <th align="right">Qty</th>
              <th align="right">m³ each</th>
              <th align="right">m³ total</th>
              <th align="right">Surcharge each</th>
              <th align="right">Surcharge total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsDetailed
              .map((it) => {
                const volTotal = (it.volumeM3 || 0) * (it.qty || 0);
                const surTotal = (it.surchargeEUR || 0) * (it.qty || 0);
                return `
                <tr>
                  <td>${escapeHtml(it.name)}</td>
                  <td align="right">${it.qty}</td>
                  <td align="right">${(it.volumeM3 ?? 0).toFixed(2)}</td>
                  <td align="right">${volTotal.toFixed(2)}</td>
                  <td align="right">${eur(it.surchargeEUR)}</td>
                  <td align="right">${eur(surTotal)}</td>
                </tr>`;
              })
              .join("")}
          </tbody>
        </table>
      `
      : hasQuantities
      ? `
        <h3 style="margin:12px 0 6px">Items</h3>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;border:1px solid #eee;">
          <thead>
            <tr style="background:#f8f8f8">
              <th align="left">Item ID</th>
              <th align="right">Qty</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(quantities)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(
                ([id, qty]) =>
                  `<tr><td>${escapeHtml(id)}</td><td align="right">${qty}</td></tr>`
              )
              .join("")}
          </tbody>
        </table>
      `
      : itemsStr
      ? `<p><strong>Items to Move:</strong><br/>${nl2brSafe(itemsStr)}</p>`
      : `<p><strong>Items to Move:</strong> (not specified)</p>`;

  const totalsHtml =
    totals && Object.keys(totals).length > 0
      ? `
        <h3 style="margin:12px 0 6px">Estimator Totals</h3>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;border:1px solid #eee;">
          <tbody>
            <tr><td>Items</td><td align="right"><strong>${totals.items ?? 0}</strong></td></tr>
            <tr><td>Total volume</td><td align="right"><strong>${(totals.volumeM3 ?? 0).toFixed(2)} m³</strong></td></tr>
            <tr><td>Handling surcharges</td><td align="right"><strong>${eur(totals.handlingSurchargesEUR)}</strong></td></tr>
            <tr><td>Distance cost</td><td align="right"><strong>${eur(totals.distanceCostEUR)}</strong></td></tr>
            <tr><td>Access surcharges</td><td align="right"><strong>${eur(totals.accessCostEUR)}</strong></td></tr>
            <tr><td>Subtotal</td><td align="right"><strong>${eur(totals.subtotalEUR)}</strong></td></tr>
            ${
              typeof totals.vatEUR === "number"
                ? `<tr><td>VAT</td><td align="right"><strong>${eur(totals.vatEUR)}</strong></td></tr>`
                : ""
            }
            <tr><td>Total</td><td align="right"><strong>${eur(totals.totalEUR)}</strong></td></tr>
          </tbody>
        </table>
      `
      : "";

  const distanceHtml =
    distanceKm > 0
      ? `<p><strong>Distance:</strong> ${distanceKm.toFixed(1)} km${
          driveDurationMin ? ` (~${Math.round(driveDurationMin)} min)` : ""
        }</p>`
      : "";

  const pricingHtml =
    pricing && Object.keys(pricing).length > 0
      ? `
        <h3 style="margin:12px 0 6px">Pricing Settings</h3>
        <pre style="background:#f6f6f6;padding:8px;border-radius:8px;white-space:pre-wrap;">${escapeHtml(
          JSON.stringify(pricing, null, 2)
        )}</pre>
      `
      : "";

  const companyHtml = `
    <h2>New Quote Request from ${escapeHtml(name)}</h2>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Pickup:</strong> ${escapeHtml(pickup)}</p>
    <p><strong>Destination:</strong> ${escapeHtml(destination)}</p>
    <p><strong>Moving Date:</strong> ${escapeHtml(date)}</p>
    ${size ? `<p><strong>Size:</strong> ${escapeHtml(size)} m²</p>` : ""}
    ${distanceHtml}
    ${itemsHtml}
    ${totalsHtml}
    ${pricingHtml}
    ${
      notes
        ? `<h3 style="margin:12px 0 6px">Additional Notes</h3><p>${nl2brSafe(
            notes
          )}</p>`
        : ""
    }
    <hr />
    <p>This message was sent automatically from the FloRemoval website.</p>
  `;

  try {
    await resend.emails.send({
      from: "FloRemoval Ireland <noreply@notifications.floremoval.com>",
      to: ["brichiile@gmail.com","emmanuelabudu53@gmail.com"],
      subject: "New Moving Quote Request",
      html: companyHtml,
    });

    if (email) {
      await resend.emails.send({
        from: "FloRemoval Ireland <noreply@notifications.floremoval.com>",
        to: [email],
        subject: "We Received Your Moving Quote Request",
        react: CustomerConfirmationEmail({ name }),
      });
    }

    return NextResponse.json(
      { message: "Quote email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
