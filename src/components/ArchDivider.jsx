/**
 * A repeating scalloped-arch silhouette used between sections instead of a
 * plain hairline — a small nod to Indian architectural motifs (jharokha /
 * mehrab arches) that also signals a category shift.
 */
export default function ArchDivider({ fromColor = '#F3EAD8', toColor = '#1F3D2B' }) {
  return (
    <div className="divider-arch" aria-hidden="true">
      <svg
        viewBox="0 0 400 28"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="28" fill={fromColor} />
        <path
          d="M0,28 L0,14 Q10,0 20,14 Q30,0 40,14 Q50,0 60,14 Q70,0 80,14 Q90,0 100,14 Q110,0 120,14 Q130,0 140,14 Q150,0 160,14 Q170,0 180,14 Q190,0 200,14 Q210,0 220,14 Q230,0 240,14 Q250,0 260,14 Q270,0 280,14 Q290,0 300,14 Q310,0 320,14 Q330,0 340,14 Q350,0 360,14 Q370,0 380,14 Q390,0 400,14 L400,28 Z"
          fill={toColor}
        />
      </svg>
    </div>
  )
}
