"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail, User } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

type Mode = "login" | "register";

type Account = {
    name: string;
    email: string;
    password: string;
};

type Status = {
    type: "success" | "error";
    message: string;
};

const STORAGE_KEY = "farmacia-super-ahorro-accounts";
const SESSION_KEY = "farmacia-super-ahorro-session";

export default function AuthPanel({ initialMode }: { initialMode: Mode }) {
    const router = useRouter();
    const [mode, setMode] = useState<Mode>(initialMode);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [status, setStatus] = useState<Status | null>(null);

    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved) as Account[];
                if (Array.isArray(parsed)) {
                    setAccounts(parsed);
                }
            }
        } catch {
            setAccounts([]);
        }
    }, []);

    const persistAccounts = (nextAccounts: Account[]) => {
        setAccounts(nextAccounts);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(nextAccounts));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus(null);

        const cleanEmail = email.trim().toLowerCase();
        const cleanPassword = password.trim();

        if (mode === "register") {
            if (!name.trim() || !cleanEmail || !cleanPassword) {
                setStatus({ type: "error", message: "Completa todos los campos para crear tu cuenta." });
                return;
            }

            if (cleanPassword.length < 6) {
                setStatus({ type: "error", message: "La contraseña debe tener al menos 6 caracteres." });
                return;
            }

            if (accounts.some((account) => account.email.toLowerCase() === cleanEmail)) {
                setStatus({ type: "error", message: "Este correo ya está registrado." });
                return;
            }

            const newAccount: Account = {
                name: name.trim(),
                email: cleanEmail,
                password: cleanPassword,
            };

            persistAccounts([...accounts, newAccount]);
            setStatus({ type: "success", message: "Cuenta creada correctamente. Ahora puedes iniciar sesión." });
            setMode("login");
            setName("");
            setEmail(cleanEmail);
            setPassword("");
            setRemember(false);
            return;
        }

        if (!cleanEmail || !cleanPassword) {
            setStatus({ type: "error", message: "Escribe tu correo y contraseña para continuar." });
            return;
        }

        const account = accounts.find(
            (item) => item.email.toLowerCase() === cleanEmail && item.password === cleanPassword,
        );

        if (!account) {
            setStatus({ type: "error", message: "Credenciales inválidas. Verifica tus datos." });
            return;
        }

        const session = {
            name: account.name,
            email: account.email,
            remember,
        };

        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        setStatus({ type: "success", message: `Bienvenido(a), ${account.name}.` });
        router.push("/");
    };

    const toggleMode = (nextMode: Mode) => {
        setMode(nextMode);
        setStatus(null);
        setPassword("");
    };

    return (
        <div className="auth-page">
            <div className="auth-shell">
                <div className="auth-card">
                    <div className="auth-header">
                        <div className="auth-logo">✚</div>
                        <div>
                            <p className="auth-kicker">Farmacia</p>
                            <h1>Super Más Ahorro</h1>
                        </div>
                    </div>

                    <div className="auth-tabs" aria-label="Selecciona una opción">
                        <button
                            type="button"
                            className={mode === "login" ? "auth-tab auth-tab-active" : "auth-tab"}
                            onClick={() => toggleMode("login")}
                        >
                            Iniciar sesión
                        </button>
                        <button
                            type="button"
                            className={mode === "register" ? "auth-tab auth-tab-active" : "auth-tab"}
                            onClick={() => toggleMode("register")}
                        >
                            Registrarse
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        {mode === "register" && (
                            <label className="auth-field">
                                <span>Nombre completo</span>
                                <div className="auth-input-wrap">
                                    <User size={16} />
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        placeholder="Tu nombre"
                                    />
                                </div>
                            </label>
                        )}

                        <label className="auth-field">
                            <span>Correo electrónico</span>
                            <div className="auth-input-wrap">
                                <Mail size={16} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="correo@ejemplo.com"
                                />
                            </div>
                        </label>

                        <label className="auth-field">
                            <span>Contraseña</span>
                            <div className="auth-input-wrap">
                                <Lock size={16} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    placeholder={mode === "login" ? "Tu contraseña" : "Mínimo 6 caracteres"}
                                />
                            </div>
                        </label>

                        {mode === "login" && (
                            <div className="auth-meta">
                                <label className="auth-checkbox">
                                    <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} />
                                    Recordarme
                                </label>
                                <Link href="/" className="auth-link">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                        )}

                        {status && (
                            <div className={status.type === "success" ? "auth-status auth-status-success" : "auth-status auth-status-error"}>
                                {status.message}
                            </div>
                        )}

                        <button type="submit" className="auth-button">
                            {mode === "login" ? "Entrar" : "Crear cuenta"}
                            <ArrowRight size={16} />
                        </button>
                    </form>

                    <p className="auth-footer">
                        {mode === "login" ? "¿No tienes cuenta?" : "¿Ya tienes una cuenta?"}
                        <button
                            type="button"
                            className="auth-toggle-link"
                            onClick={() => setMode(mode === "login" ? "register" : "login")}
                        >
                            {mode === "login" ? "Regístrate" : "Inicia sesión"}
                        </button>
                    </p>

                    <Link href="/" className="auth-secondary-link">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
