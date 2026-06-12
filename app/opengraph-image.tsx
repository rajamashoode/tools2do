import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Tools2Do – Free Online Developer Tools & Pakistan Utilities';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image(): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0B0F19 0%, #1E293B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          padding: '60px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{
            background: '#6366F1',
            borderRadius: '16px',
            width: '64px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
          }}>⚡</div>
          <span style={{ color: '#FFFFFF', fontSize: '48px', fontWeight: 800 }}>
            tools2do<span style={{ color: '#38BDF8' }}>.com</span>
          </span>
        </div>
        <p style={{ color: '#94A3B8', fontSize: '28px', textAlign: 'center', maxWidth: '800px', margin: '0 0 40px' }}>
          Free browser-based tools for developers and Pakistan utility helpers
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['40+ Free Tools', 'No Signup', 'Browser-only', '🇵🇰 Pakistan Utilities'].map(tag => (
            <div key={tag} style={{
              background: 'rgba(99,102,241,0.2)',
              border: '1px solid #6366F1',
              borderRadius: '99px',
              padding: '8px 20px',
              color: '#C7D2FE',
              fontSize: '20px',
              fontWeight: 600,
            }}>{tag}</div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
