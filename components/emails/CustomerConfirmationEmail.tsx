// components/emails/CustomerConfirmationEmail.tsx
import { Html, Head, Preview, Body, Container, Text } from '@react-email/components';

interface CustomerConfirmationEmailProps {
  name: string;
}

export const CustomerConfirmationEmail = ({ name }: CustomerConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Your Moving Quote Request Received</Preview>
    <Body style={{ backgroundColor: '#f9f7f3', fontFamily: 'Arial, sans-serif' }}>
      <Container>
        <Text style={{ fontSize: '18px', color: '#1B5E20' }}>
          Hello {name},
        </Text>
        <Text>
          Thank you for requesting a moving quote from FloRemove Ireland. Our team will review your information and get back to you shortly.
        </Text>
        <Text>
          Best regards,
          <br />
          The FloRemovalTeam
        </Text>
      </Container>
    </Body>
  </Html>
);
