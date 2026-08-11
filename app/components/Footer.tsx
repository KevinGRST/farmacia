export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container-main">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
                    <span style={{
                        color: "#ffffff",
                        fontWeight: 900,
                        fontSize: 18,
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(255,255,255,0.1)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        ✚
                    </span>
                    <span style={{ fontWeight: 700, color: "#ffffff", fontSize: 14 }}>
                        Farmacia Más Ahorro
                    </span>
                </div>
                
                <p style={{ fontSize: 12, margin: 0 }}>
                    © {new Date().getFullYear()} Farmacia Super Más Ahorro · San Pablo huixtepec, México 
                </p>
                <p style={{ fontSize: 11, marginTop: 10, color: "rgba(255,255,255,0.35)" }}>
                    Desarrollado por alumnos de DGS-902 · UTVCO
                </p>
            </div>
        </footer>
    );
}
