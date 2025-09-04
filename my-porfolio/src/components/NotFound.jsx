const NotFound = () => {
    return (
        <div className="text-center mt-5 min-vh-100">
            <div className="bg-danger text-white py-4">
                <i className="bi bi-exclamation-triangle-fill fs-1"></i>
                <p>La pagina che stai cercando non esiste.</p>
            </div>
        </div>
    );
};

export default NotFound;