import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(29, 155, 240, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(249, 24, 128, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: 16,
              background: 'linear-gradient(45deg, #1d9bf0, #f91880)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 4px 8px rgba(0,0,0,0.15)',
              letterSpacing: '-0.02em',
            }}
          >
            X・SNSバズシミュレーター
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 38,
              color: '#1e293b',
              textAlign: 'center',
              marginBottom: 50,
              fontWeight: 800,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            投稿がバズる・炎上する体験ができる
          </div>
          
          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              alignItems: 'center',
              marginBottom: 30,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '24px 32px',
                backgroundColor: '#fff',
                borderRadius: '20px',
                border: '2px solid #f91880',
                boxShadow: '0 8px 32px rgba(249, 24, 128, 0.15)',
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 8 }}>🔥</div>
              <div style={{ fontSize: 22, color: '#f91880', fontWeight: 900 }}>炎上体験</div>
            </div>
            
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '24px 32px',
                backgroundColor: '#fff',
                borderRadius: '20px',
                border: '2px solid #1d9bf0',
                boxShadow: '0 8px 32px rgba(29, 155, 240, 0.15)',
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 8 }}>📈</div>
              <div style={{ fontSize: 22, color: '#1d9bf0', fontWeight: 900 }}>バズ体験</div>
            </div>
          </div>
          
          {/* Call to action */}
          <div
            style={{
              fontSize: 32,
              color: '#334155',
              textAlign: 'center',
              fontWeight: 800,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            今すぐ投稿してみよう！
          </div>
        </div>
        
        {/* Bottom branding */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 50,
            fontSize: 20,
            color: '#475569',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontWeight: 700,
          }}
        >
          <div>made by ShinCode</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}