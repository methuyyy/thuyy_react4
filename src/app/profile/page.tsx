export default function ProfilePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9564DD',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#1f2937',
          marginBottom: '1.5rem',
          borderBottom: '2px solid #e5e7eb',
          paddingBottom: '0.5rem'
        }}>
          Biodata Diri
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#374151' }}>
          <p><strong>Nama:</strong> Aretha</p>
          <p><strong>Jurusan:</strong> Rekayasa Perangkat Lunak (RPL)</p>
          <p><strong>Sekolah:</strong> SMKN 4 Malang</p>
          <p><strong>Kelas:</strong> XI RPL C</p>
          <p><strong>Fokus:</strong> Website Development</p>
          <p><strong>Hobi:</strong> Dance, Reading, and singing</p>
        </div>
      </div>
    </div>
  );
}