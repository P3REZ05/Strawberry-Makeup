import React from "react";
import '../../App.css';
import logo from '../../assets/logo/strawberrymakeup.png';

const Admin = () => {
    return (
        <div className="container d-flex align-items-center justify-content-between vh-100">
            {/* Logo Section */}
            <div className="d-none d-md-flex align-items-center justify-content-center" style={{ flex: '1' }}>
                <img 
                    src={logo} 
                    alt="Logo" 
                    style={{ 
                        maxWidth: '80%',
                        height: 'auto'
                    }} 
                />
            </div>

            {/* Login Form Section */}
            <div className="d-flex align-items-center justify-content-center" style={{ flex: '1' }}>
                <div className="card p-4" id="login-card">
                    <div className="text-center">
                        <div className="icon">
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <h5 className="mt-3">Iniciar Sesión</h5>
                    </div>
                    <form>
                        <div className="form-group mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Usuario" 
                                required 
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Contraseña" 
                                required 
                            />
                        </div>
                        <div className="form-group d-flex justify-content-between align-items-center mb-3">
                            <div className="form-check">
                                <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    id="rememberMe"
                                />
                                <label className="form-check-label" htmlFor="rememberMe">
                                    Recordarme
                                </label>
                            </div>
                            <a href="#" style={{color: 'var(--primary)', textDecoration: 'none'}}>
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <button 
                            type="submit" 
                            className="btn w-100"
                            style={{
                                backgroundColor: 'var(--primary)',
                                color: 'white'
                            }}
                        >
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;