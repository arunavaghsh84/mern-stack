import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

const useUserIdFromToken = () => {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decoded = jwtDecode(token);
            setUserId(decoded.id);
        }
    }, []);

    return userId;
};

export default useUserIdFromToken;
