"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

// ---------------- Types ----------------
export type Category =
  | "Living & Dining Room"
  | "Kitchen & Appliances"
  | "Bedroom(s) & Office"
  | "Garage & Cellar"
  | "Others";

export type Item = {
  id: string;
  name: string;
  category: Category;
  volumeM3: number;      // packed volume per unit (m³)
  surchargeEUR?: number; // optional handling per unit
  keywords?: string[];   // extra search keywords
};

// ---------------- Catalog ----------------
const CATALOG: Item[] = [
  // Living & Dining Room
  { id: "sofa_3", name: "Sofa (3-seater)", category: "Living & Dining Room", volumeM3: 2.5 },
  { id: "sofa_corner", name: "Corner sofa", category: "Living & Dining Room", volumeM3: 3.0 },
  { id: "armchair", name: "Armchair", category: "Living & Dining Room", volumeM3: 0.6 },
  { id: "recliner", name: "Recliner chair", category: "Living & Dining Room", volumeM3: 0.8 },
  { id: "coffee_table", name: "Coffee table", category: "Living & Dining Room", volumeM3: 0.3 },
  { id: "side_table", name: "Side table", category: "Living & Dining Room", volumeM3: 0.2 },
  { id: "tv_55", name: "TV up to 55\"", category: "Living & Dining Room", volumeM3: 0.3 },
  { id: "tv_65_plus", name: "TV 65\"+", category: "Living & Dining Room", volumeM3: 0.4 },
  { id: "tv_stand", name: "TV stand / unit", category: "Living & Dining Room", volumeM3: 0.2 },
  { id: "dining_table", name: "Dining table", category: "Living & Dining Room", volumeM3: 1.2 },
  { id: "dining_chair", name: "Dining chair", category: "Living & Dining Room", volumeM3: 0.2 },
  { id: "bookcase", name: "Bookcase (tall)", category: "Living & Dining Room", volumeM3: 2.0 },
  { id: "lamp_floor", name: "Floor lamp", category: "Living & Dining Room", volumeM3: 1.0 },
  { id: "frame_large", name: "Large picture / frame", category: "Living & Dining Room", volumeM3: 0.08 },

  // Kitchen & Appliances
  { id: "fridge_freezer", name: "Fridge-freezer", category: "Kitchen & Appliances", volumeM3: 0.8, surchargeEUR: 10 },
  { id: "fridge_under", name: "Fridge (under-counter)", category: "Kitchen & Appliances", volumeM3: 0.4, surchargeEUR: 10 },
  { id: "washing_machine", name: "Washing machine", category: "Kitchen & Appliances", volumeM3: 0.5, surchargeEUR: 10 },
  { id: "tumble_dryer", name: "Tumble dryer", category: "Kitchen & Appliances", volumeM3: 0.5, surchargeEUR: 10 },
  { id: "dishwasher", name: "Dishwasher", category: "Kitchen & Appliances", volumeM3: 0.5, surchargeEUR: 10 },
  { id: "oven_cooker", name: "Oven / cooker", category: "Kitchen & Appliances", volumeM3: 0.7, surchargeEUR: 10 },
  { id: "microwave", name: "Microwave", category: "Kitchen & Appliances", volumeM3: 0.1 },
  { id: "kitchen_table", name: "Kitchen table", category: "Kitchen & Appliances", volumeM3: 0.8 },
  { id: "bar_stool", name: "Bar stool", category: "Kitchen & Appliances", volumeM3: 0.15 },

  // Bedroom(s) & Office
  { id: "bed_double", name: "Bed frame (double)", category: "Bedroom(s) & Office", volumeM3: 1.2 },
  { id: "bed_king", name: "Bed frame (king)", category: "Bedroom(s) & Office", volumeM3: 1.5 },
  { id: "mattress_double", name: "Mattress (double)", category: "Bedroom(s) & Office", volumeM3: 0.7 },
  { id: "wardrobe_2dr", name: "Wardrobe (2-door)", category: "Bedroom(s) & Office", volumeM3: 1.5 },
  { id: "wardrobe_3dr", name: "Wardrobe (3-door)", category: "Bedroom(s) & Office", volumeM3: 2.1 },
  { id: "chest_drawers", name: "Chest of drawers", category: "Bedroom(s) & Office", volumeM3: 0.7 },
  { id: "bedside", name: "Bedside table", category: "Bedroom(s) & Office", volumeM3: 0.2 },
  { id: "desk_std", name: "Desk (standard)", category: "Bedroom(s) & Office", volumeM3: 0.8 },
  { id: "desk_large", name: "Desk (large)", category: "Bedroom(s) & Office", volumeM3: 1.1 },
  { id: "office_chair", name: "Office chair", category: "Bedroom(s) & Office", volumeM3: 0.3 },
  { id: "pc_tower", name: "PC / tower", category: "Bedroom(s) & Office", volumeM3: 0.1 },
  { id: "monitor", name: "Monitor", category: "Bedroom(s) & Office", volumeM3: 0.08 },

  // Garage & Cellar
  { id: "bicycle", name: "Bicycle", category: "Garage & Cellar", volumeM3: 0.5 },
  { id: "lawn_mower", name: "Lawn mower", category: "Garage & Cellar", volumeM3: 0.6 },
  { id: "tool_chest", name: "Tool chest", category: "Garage & Cellar", volumeM3: 0.5 },
  { id: "shelves_garage", name: "Shelving unit (garage)", category: "Garage & Cellar", volumeM3: 0.9 },
  { id: "box_large", name: "Box (large)", category: "Garage & Cellar", volumeM3: 0.1 },
  { id: "box_medium", name: "Box (medium)", category: "Garage & Cellar", volumeM3: 0.07 },
  { id: "ladder", name: "Ladder", category: "Garage & Cellar", volumeM3: 0.3 },
  { id: "garden_set", name: "Garden furniture set", category: "Garage & Cellar", volumeM3: 1.2 },

  // Others
  { id: "suitcase", name: "Suitcase", category: "Others", volumeM3: 0.1 },
  { id: "mirror", name: "Mirror (large)", category: "Others", volumeM3: 0.1 },
  { id: "rug", name: "Rug", category: "Others", volumeM3: 0.2 },
  { id: "planter", name: "Planter / pot", category: "Others", volumeM3: 0.15 },
  { id: "artwork", name: "Artwork (framed)", category: "Others", volumeM3: 0.05 },
  { id: "piano_upright", name: "Piano (upright)", category: "Others", volumeM3: 1.5, surchargeEUR: 80 },
  { id: "treadmill", name: "Treadmill", category: "Others", volumeM3: 1.0, surchargeEUR: 20 },
  { id: "vacuum", name: "Vacuum cleaner", category: "Others", volumeM3: 0.12 },
];

const CATEGORIES: Category[] = [
  "Living & Dining Room",
  "Kitchen & Appliances",
  "Bedroom(s) & Office",
  "Garage & Cellar",
  "Others",
];

// ---------------- Pricing model (Ireland defaults; pre-VAT) ----------------
const DEFAULT_PRICING = {
  baseFeeEUR: 80,
  ratePerM3EUR: 35,
  ratePerKmEUR: 1.2, // distance-based pricing
  minChargeEUR: 150,
  includeVAT: true,
  vatRate: 0.23,
  // Access surcharges
  stairsPerFloorEUR: 10, // per floor, origin + destination
  longCarryEUR: 15, // long carry / elevator unavailable
  parkingRestrictionEUR: 20,
};

// ---------------- Helpers ----------------
function eur(value: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}
function clamp(n: number, min = 0, max = 999) {
  return Math.min(max, Math.max(min, Math.round(n)));
}
const LS_KEY = "floremoval_estimator_v3";

// Google Maps loader
const libraries: Array<"places"> = ["places"];

// ---------------- Main Component ----------------
export default function EstimatorPage() {
  const [activeCategory, setActiveCategory] = useState<Category>(CATEGORIES[0]);
  const [search, setSearch] = useState("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [pricing, setPricing] = useState(DEFAULT_PRICING);

  // Quote form fields
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", notes: "" });

  // Address + Maps
  const pickupRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);
  const [pickupAC, setPickupAC] = useState<any>(null);
  const [destinationAC, setDestinationAC] = useState<any>(null);
  const [pickupAddress, setPickupAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [pickupLL, setPickupLL] = useState<{ lat: number; lng: number } | null>(null);
  const [destinationLL, setDestinationLL] = useState<{ lat: number; lng: number } | null>(null);
  const [distanceKm, setDistanceKm] = useState<number>(0);
  const [driveDurationMin, setDriveDurationMin] = useState<number>(0);

  // Access surcharges
  const [floorsOrigin, setFloorsOrigin] = useState(0);
  const [floorsDest, setFloorsDest] = useState(0);
  const [longCarry, setLongCarry] = useState(false);
  const [parkingIssues, setParkingIssues] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:
      (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string | undefined) ??
      (process.env.NEXT_PUBLIC_Maps_API_KEY as string | undefined) ??
      "",
    libraries,
  });

  // Persist
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.quantities) setQuantities(parsed.quantities);
        if (parsed?.pricing) setPricing({ ...DEFAULT_PRICING, ...parsed.pricing });
      }
    } catch (e) {
      /* ignore */
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify({ quantities, pricing }));
  }, [quantities, pricing]);

  // Build filtered items (search across entire catalog, regardless of category)
  const searchLower = search.trim().toLowerCase();
  const filteredAll = useMemo(() => {
    if (!searchLower) return CATALOG;
    return CATALOG.filter(
      (i) =>
        i.name.toLowerCase().includes(searchLower) ||
        i.id.toLowerCase().includes(searchLower) ||
        (i.keywords || []).some((k) => k.toLowerCase().includes(searchLower))
    );
  }, [searchLower]);

  const itemsByCategory = useMemo(() => {
    // When searching, show ALL results in a single list, ignore category tabs
    if (searchLower) return [{ category: "Others" as Category, items: filteredAll, isSearch: true }];
    return CATEGORIES.map((cat) => ({
      category: cat,
      items: CATALOG.filter((i) => i.category === cat),
      isSearch: false,
    }));
  }, [searchLower, filteredAll]);

  // Totals
  const { totalVolume, totalSurcharge, totalItems } = useMemo(() => {
    let volume = 0,
      surcharge = 0,
      count = 0;
    for (const item of CATALOG) {
      const q = quantities[item.id] || 0;
      if (!q) continue;
      volume += item.volumeM3 * q;
      if (item.surchargeEUR) surcharge += item.surchargeEUR * q;
      count += q;
    }
    return { totalVolume: volume, totalSurcharge: surcharge, totalItems: count };
  }, [quantities]);

  // Distance calculation & geocode fallback
  useEffect(() => {
    const g: any = (window as any).google;
    if (!isLoaded || !g) return;

    (async () => {
      try {
        if (!pickupLL && pickupAddress) {
          const geo = new g.maps.Geocoder();
          const r = await geo.geocode({ address: pickupAddress });
          const loc = r?.results?.[0]?.geometry?.location;
          if (loc) setPickupLL({ lat: loc.lat(), lng: loc.lng() });
        }
        if (!destinationLL && destinationAddress) {
          const geo = new g.maps.Geocoder();
          const r = await geo.geocode({ address: destinationAddress });
          const loc = r?.results?.[0]?.geometry?.location;
          if (loc) setDestinationLL({ lat: loc.lat(), lng: loc.lng() });
        }
      } catch (e) {
        /* ignore */
      }
    })();

    if (!pickupLL || !destinationLL) return;

    const svc = new g.maps.DistanceMatrixService();
    svc.getDistanceMatrix(
      {
        origins: [pickupLL],
        destinations: [destinationLL],
        travelMode: "DRIVING",
        unitSystem: g.maps.UnitSystem.METRIC,
      },
      (res: any, status: any) => {
        if (status === "OK" && res?.rows?.[0]?.elements?.[0]?.status === "OK") {
          const el = res.rows[0].elements[0];
          setDistanceKm(el.distance.value / 1000);
          setDriveDurationMin(el.duration.value / 60);
        }
      }
    );
  }, [isLoaded, pickupAddress, destinationAddress, pickupLL, destinationLL]);

  // Pricing calc
  const accessCost = useMemo(() => {
    const floorsCost = (floorsOrigin + floorsDest) * pricing.stairsPerFloorEUR;
    const longCarryCost = longCarry ? pricing.longCarryEUR : 0;
    const parkingCost = parkingIssues ? pricing.parkingRestrictionEUR : 0;
    return floorsCost + longCarryCost + parkingCost;
  }, [floorsOrigin, floorsDest, longCarry, parkingIssues, pricing]);

  const pricingCalc = useMemo(() => {
    const distanceCost = distanceKm * pricing.ratePerKmEUR;
    const base = pricing.baseFeeEUR + totalSurcharge + pricing.ratePerM3EUR * totalVolume + distanceCost + accessCost;
    const preMin = Math.max(base, pricing.minChargeEUR);
    const vat = pricing.includeVAT ? preMin * pricing.vatRate : 0;
    const grand = preMin + vat;
    return { base, preMin, vat, grand, distanceCost };
  }, [pricing, totalVolume, totalSurcharge, distanceKm, accessCost]);

  // Quantity helpers
  function setQty(id: string, next: number) {
    setQuantities((prev) => ({ ...prev, [id]: clamp(next) }));
  }
  function clearAll() {
    setQuantities({});
  }

  // Share link
  function shareLink() {
    const params = new URLSearchParams();
    params.set(
      "q",
      Object.entries(quantities)
        .filter(([, v]) => v && v > 0)
        .map(([k, v]) => `${k}:${v}`)
        .join(",")
    );
    params.set("p", JSON.stringify(pricing));
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard.writeText(url).catch(() => {});
    alert("Sharable link copied to clipboard");
  }

  // Prefer AC geometry; fallback to geocode typed value if needed
  async function onPlaceChanged(which: "pickup" | "destination") {
    const g = (window as any).google as any;
    const ac = which === "pickup" ? pickupAC : destinationAC;
    const input = which === "pickup" ? pickupRef.current : destinationRef.current;
    const val = input?.value || "";

    if (which === "pickup") setPickupAddress(val);
    else setDestinationAddress(val);

    // Prefer geometry from Autocomplete
    const place = ac?.getPlace?.();
    const loc = place?.geometry?.location;
    if (loc) {
      const ll = { lat: loc.lat(), lng: loc.lng() };
      if (which === "pickup") setPickupLL(ll);
      else setDestinationLL(ll);
      return;
    }

    // Fallback: geocode typed address
    if (g && val) {
      try {
        const geocoder = new g.maps.Geocoder();
        const { results } = await geocoder.geocode({ address: val });
        const gl = results?.[0]?.geometry?.location;
        if (gl) {
          const ll = { lat: gl.lat(), lng: gl.lng() };
          if (which === "pickup") setPickupLL(ll);
          else setDestinationLL(ll);
        }
      } catch (e) {
        /* ignore */
      }
    }
  }

  // Apply preset quantities
  function applyPreset(preset: "Studio" | "1-bed" | "2-bed") {
    const q: Record<string, number> = {};
    const add = (id: string, n: number) => (q[id] = (q[id] || 0) + n);

    if (preset === "Studio") {
      add("armchair", 1);
      add("coffee_table", 1);
      add("tv_55", 1);
      add("box_medium", 15);
      add("box_large", 5);
      add("desk_std", 1);
      add("office_chair", 1);
      add("bed_double", 1);
      add("mattress_double", 1);
    }
    if (preset === "1-bed") {
      add("sofa_3", 1);
      add("armchair", 1);
      add("coffee_table", 1);
      add("tv_55", 1);
      add("dining_table", 1);
      add("dining_chair", 4);
      add("bookcase", 1);
      add("fridge_freezer", 1);
      add("washing_machine", 1);
      add("bed_double", 1);
      add("mattress_double", 1);
      add("wardrobe_2dr", 1);
      add("box_medium", 25);
      add("box_large", 10);
    }
    if (preset === "2-bed") {
      add("sofa_3", 1);
      add("armchair", 2);
      add("coffee_table", 1);
      add("tv_55", 1);
      add("dining_table", 1);
      add("dining_chair", 6);
      add("bookcase", 2);
      add("fridge_freezer", 1);
      add("washing_machine", 1);
      add("dishwasher", 1);
      add("bed_double", 2);
      add("mattress_double", 2);
      add("wardrobe_2dr", 2);
      add("box_medium", 40);
      add("box_large", 16);
    }

    setQuantities(q);
  }

  // Submit quote to your API (includes itemsDetailed for prettier email)
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const itemsDetailed = Object.entries(quantities)
        .filter(([, q]) => (q || 0) > 0)
        .map(([id, q]) => {
          const it = CATALOG.find((x) => x.id === id)!;
          return { id, name: it.name, volumeM3: it.volumeM3, surchargeEUR: it.surchargeEUR || 0, qty: q };
        });

      const payload = {
        ...form,
        pickup: pickupAddress,
        destination: destinationAddress,
        distanceKm,
        driveDurationMin,
        quantities,
        itemsDetailed,
        totals: {
          items: totalItems,
          volumeM3: totalVolume,
          handlingSurchargesEUR: totalSurcharge,
          distanceCostEUR: pricingCalc.distanceCost,
          accessCostEUR: accessCost,
          subtotalEUR: pricingCalc.preMin,
          vatEUR: pricing.includeVAT ? pricingCalc.vat : 0,
          totalEUR: pricingCalc.grand,
        },
        pricing,
      };

      const res = await fetch("/api/quote/request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) alert("Thanks! We’ll get back to you shortly with a quote.");
      else alert("Something went wrong. Please try again.");
    } catch (err) {
      console.error(err);
      alert("Error sending request.");
    }
  }

  if (!isLoaded) return <p className="text-center mt-12">Loading Google Maps…</p>;

  // ---------------- UI ----------------
  return (
    <section className="bg-[#f9f7f3] min-h-screen py-6 sm:py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8">
        <header className="mb-4 sm:mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B5E20]">Volume & Cost Estimator</h1>
          <p className="mt-1 text-sm sm:text-base text-[#555]">
            Estimate total volume (m³) and cost for your move in Ireland.
          </p>
        </header>

        {/* Address + date + contact */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <Autocomplete
              onLoad={(ac) => setPickupAC(ac)}
              options={{ fields: ["geometry", "formatted_address", "name"] }}
              onPlaceChanged={() => onPlaceChanged("pickup")}
            >
              <input
                ref={pickupRef}
                placeholder="Pickup Address / Location"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                value={pickupAddress}
                onChange={(e) => setPickupAddress(e.target.value)}
              />
            </Autocomplete>

            <Autocomplete
              onLoad={(ac) => setDestinationAC(ac)}
              options={{ fields: ["geometry", "formatted_address", "name"] }}
              onPlaceChanged={() => onPlaceChanged("destination")}
            >
              <input
                ref={destinationRef}
                placeholder="Destination Address"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                value={destinationAddress}
                onChange={(e) => setDestinationAddress(e.target.value)}
              />
            </Autocomplete>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <input
              type="date"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
            <select
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
              onChange={(e) => applyPreset(e.target.value as any)}
              defaultValue=""
            >
              <option value="" disabled>
                Choose size preset (optional)
              </option>
              <option value="Studio">Studio</option>
              <option value="1-bed">1 bed</option>
              <option value="2-bed">2 bed</option>
            </select>
            <textarea
              placeholder="Any additional notes or requests?"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20] h-[48px]"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>

          {/* Access inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <LabeledNumberSm label="Floors (origin)" value={floorsOrigin} onChange={setFloorsOrigin} />
            <LabeledNumberSm label="Floors (destination)" value={floorsDest} onChange={setFloorsDest} />
            <label className="flex items-center gap-2 px-3 py-3 border rounded-lg">
              <input type="checkbox" className="h-5 w-5" checked={longCarry} onChange={(e) => setLongCarry(e.target.checked)} />
              <span className="text-sm">Long carry / no lift</span>
            </label>
            <label className="flex items-center gap-2 px-3 py-3 border rounded-lg">
              <input type="checkbox" className="h-5 w-5" checked={parkingIssues} onChange={(e) => setParkingIssues(e.target.checked)} />
              <span className="text-sm">Parking restrictions</span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#1B5E20] hover:bg-[#155d28] text-white py-3 sm:py-3.5 rounded-xl text-base sm:text-lg font-semibold shadow-md transition"
          >
            Submit Quote Request
          </button>
        </form>

        {/* Controls */}
        <div className="mb-4 sm:mb-6 flex flex-wrap items-center gap-2">
          {!searchLower && (
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 w-full sm:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap rounded-2xl border px-3 py-2 text-sm ${
                    cat === activeCategory ? "bg-[#1B5E20] text-white" : "hover:bg-[#f0f8f2]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              placeholder="Search all items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 sm:w-64 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20] text-sm"
            />
            <button
              onClick={shareLink}
              className="flex-1 sm:flex-none rounded-2xl bg-[#1B5E20] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#155d28]"
            >
              Copy link
            </button>
            <button
              onClick={clearAll}
              className="flex-1 sm:flex-none rounded-2xl border px-4 py-2.5 text-sm hover:bg-[#f0f8f2]"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* LEFT: Items */}
          <section className="lg:col-span-2">
            <div className="space-y-4 sm:space-y-6">
              {itemsByCategory.map(({ category, items, isSearch }) => (
                <div key={category} className={!isSearch && category !== activeCategory ? "hidden" : "block"}>
                  {!isSearch && <h2 className="mb-3 text-lg font-semibold">{category}</h2>}
                  {isSearch && <h2 className="mb-3 text-lg font-semibold">Search results</h2>}

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {items.map((item) => {
                      const qty = quantities[item.id] || 0;
                      return (
                        <div key={item.id} className="rounded-2xl border p-4 shadow-sm transition hover:shadow-md">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-gray-500">
                                {item.volumeM3} m³ each
                                {item.surchargeEUR ? ` · +${eur(item.surchargeEUR)} handling` : ""}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                aria-label={`Decrease ${item.name}`}
                                onClick={() => setQty(item.id, (qty || 0) - 1)}
                                className="h-10 w-10 sm:h-8 sm:w-8 rounded-full border text-lg leading-none disabled:opacity-40"
                                disabled={qty <= 0}
                              >
                                −
                              </button>
                              <input
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={qty || 0}
                                onChange={(e) => setQty(item.id, Number(e.target.value || 0))}
                                className="h-10 sm:h-8 w-16 rounded-xl border px-2 text-center text-sm"
                              />
                              <button
                                aria-label={`Increase ${item.name}`}
                                onClick={() => setQty(item.id, (qty || 0) + 1)}
                                className="h-10 w-10 sm:h-8 sm:w-8 rounded-full border text-lg leading-none"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          {!!qty && (
                            <div className="mt-2 text-xs text-gray-600">
                              {qty} × {item.volumeM3} m³ = {(item.volumeM3 * qty).toFixed(2)} m³
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {items.length === 0 && (
                    <div className="rounded-2xl border p-4 text-sm text-gray-600">No items match your search.</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* RIGHT: Summary */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-4 space-y-4">
              <div className="rounded-2xl border p-5 sm:p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold">Your summary</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-500">Items</div>
                  <div className="text-right font-medium">{totalItems}</div>
                  <div className="text-gray-500">Total volume</div>
                  <div className="text-right font-medium">{totalVolume.toFixed(2)} m³</div>
                  <div className="text-gray-500">Handling surcharges</div>
                  <div className="text-right font-medium">{eur(totalSurcharge)}</div>
                  <div className="text-gray-500">Distance</div>
                  <div className="text-right font-medium">{distanceKm ? `${distanceKm.toFixed(1)} km` : "—"}</div>
                </div>
                <hr className="my-3" />
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Base fee</div>
                  <div className="text-right">{eur(pricing.baseFeeEUR)}</div>
                  <div>Volume @ {eur(pricing.ratePerM3EUR)}/m³</div>
                  <div className="text-right">{eur(pricing.ratePerM3EUR * totalVolume)}</div>
                  <div>Distance @ {eur(pricing.ratePerKmEUR)}/km</div>
                  <div className="text-right">{eur(pricingCalc.distanceCost)}</div>
                  <div>Access (stairs/parking)</div>
                  <div className="text-right">{eur(accessCost)}</div>
                  <div className="font-medium">Subtotal (min. {eur(pricing.minChargeEUR)})</div>
                  <div className="text-right font-medium">{eur(pricingCalc.preMin)}</div>
                  {pricing.includeVAT && (
                    <>
                      <div>VAT @ {(pricing.vatRate * 100).toFixed(0)}%</div>
                      <div className="text-right">{eur(pricingCalc.vat)}</div>
                    </>
                  )}
                </div>
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="text-sm text-gray-500">Estimated total</div>
                  <div className="text-2xl font-bold text-[#1B5E20]">{eur(pricingCalc.grand)}</div>
                </div>
              </div>

              <div className="rounded-2xl border p-5 sm:p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold">Pricing settings</h3>
                <div className="space-y-3 text-sm">
                  <LabeledNumber
                    label="Base fee (€)"
                    value={pricing.baseFeeEUR}
                    onChange={(v) => setPricing((p) => ({ ...p, baseFeeEUR: v }))}
                  />
                  <LabeledNumber
                    label="Rate per m³ (€)"
                    value={pricing.ratePerM3EUR}
                    onChange={(v) => setPricing((p) => ({ ...p, ratePerM3EUR: v }))}
                  />
                  <LabeledNumber
                    label="Rate per km (€)"
                    value={pricing.ratePerKmEUR}
                    onChange={(v) => setPricing((p) => ({ ...p, ratePerKmEUR: v }))}
                  />
                  <LabeledNumber
                    label="Minimum charge (€)"
                    value={pricing.minChargeEUR}
                    onChange={(v) => setPricing((p) => ({ ...p, minChargeEUR: v }))}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <LabeledNumber
                      label="Stairs per floor (€)"
                      value={pricing.stairsPerFloorEUR}
                      onChange={(v) => setPricing((p) => ({ ...p, stairsPerFloorEUR: v }))}
                    />
                    <LabeledNumber
                      label="Long carry (€)"
                      value={pricing.longCarryEUR}
                      onChange={(v) => setPricing((p) => ({ ...p, longCarryEUR: v }))}
                    />
                    <LabeledNumber
                      label="Parking restr. (€)"
                      value={pricing.parkingRestrictionEUR}
                      onChange={(v) => setPricing((p) => ({ ...p, parkingRestrictionEUR: v }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm">Include VAT</label>
                    <input
                      type="checkbox"
                      checked={pricing.includeVAT}
                      onChange={(e) => setPricing((p) => ({ ...p, includeVAT: e.target.checked }))}
                      className="h-4 w-4"
                    />
                  </div>
                  <LabeledNumber
                    label="VAT rate (%)"
                    value={pricing.vatRate * 100}
                    onChange={(v) => setPricing((p) => ({ ...p, vatRate: clamp(v, 0, 100) / 100 }))}
                  />
                </div>
              </div>

              <div className="rounded-2xl border p-5 sm:p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold">Export</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => window.print()}
                    className="rounded-2xl border px-4 py-2 text-sm hover:bg-[#f0f8f2]"
                  >
                    Print / Save PDF
                  </button>
                  <button
                    onClick={shareLink}
                    className="rounded-2xl bg-[#1B5E20] px-4 py-2 text-sm font-medium text-white hover:bg-[#155d28]"
                  >
                    Copy link
                  </button>
                  <button
                    onClick={clearAll}
                    className="rounded-2xl border px-4 py-2 text-sm hover:bg-[#f0f8f2]"
                  >
                    Clear items
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <footer className="mt-6 sm:mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} FloRemoval — This tool is for guidance only.
        </footer>
      </div>
    </section>
  );
}

function LabeledNumber({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="flex items-center justify-between gap-3">
      <span className="text-sm">{label}</span>
      <input
        type="number"
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-32 rounded-lg border px-3 py-2 text-right text-sm focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
      />
    </label>
  );
}

function LabeledNumberSm({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="flex items-center justify-between gap-3 px-3 py-3 border rounded-lg">
      <span className="text-sm">{label}</span>
      <input
        type="number"
        step={1}
        min={0}
        max={20}
        value={value}
        onChange={(e) => onChange(clamp(Number(e.target.value), 0, 20))}
        className="w-24 rounded-lg border px-3 py-2 text-right text-sm focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
      />
    </label>
  );
}
