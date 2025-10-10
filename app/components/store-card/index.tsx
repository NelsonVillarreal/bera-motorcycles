'use client';

export default function StoreCard() {
    return (
        <div className="max-w-md mx-auto mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="text-gray-600 p-5">
                <h2 className="text-xl font-semibold mb-2">Nossa Loja</h2>
                <p className="mb-4">Av. Universitaria 6441, Comas, Peru.</p>
            </div>

            <div className="h-64">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.3948917720013!2d-77.06340252418693!3d-11.94713814005536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d1d40abb69ab%3A0x506d2a1066961942!2sAv.%20Universitaria%206441%2C%20Comas%2015314%2C%20Peru!5e0!3m2!1spt-BR!2sbr!4v1760055474325!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
            </div>
        </div>
    );
}
