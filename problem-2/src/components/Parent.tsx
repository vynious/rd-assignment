import React, { useState } from 'react';
import { UserTicket } from '../constants/userTicket';
import ItemComponent from './Item';

interface ParentComponentProp {
    data: UserTicket[] | undefined;
}

export const ParentComponent: React.FC<ParentComponentProp> = ({ data }) => {
    const [selectedUser, setSelectedUser] = useState<UserTicket | null>(null);

    const handleCardClick = (user: UserTicket) => {
        setSelectedUser(user);
    };

    const handleCloseUserComponent = () => {
        setSelectedUser(null);
    };

    return (
        <div className="container mx-auto p-6 bg-[#1F1F1F] sm:max-w-2xl sm:rounded-lg sm:px-10 max-h-[500px]">
            {!data ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-pulse">
                    {Array(8).fill(0).map((_, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-[#262626] rounded-lg shadow-lg border border-gray-500"
                        >
                            <div className="h-4 bg-gray-600 rounded mb-2"></div>
                            <div className="h-4 bg-gray-600 rounded"></div>
                        </div>
                    ))}
                </div>
            ) : !selectedUser ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-y-auto overflow-x-hidden max-h-[500px] text-center pr-4">
                    {data.map((user) => (
                        <div
                            key={user.userId}
                            className="p-6 bg-[#1F1F1F] rounded-lg shadow-lg hover:bg-[#7CFFC4] hover:shadow-2xl transition-all duration-300 cursor-pointer border border-[#7CFFC4] hover:text-[#2B2B2B] text-[#7CFFC4]"
                            onClick={() => handleCardClick(user)}
                        >
                            <p className="text-sm font-semibold text-center">
                                User ID: {user.userId}
                            </p>
                            <p className="text-xs mt-1">Tickets: {user.train_tickets.length}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <ItemComponent user={selectedUser} onClose={handleCloseUserComponent} />
            )}
        </div>
    );
};

export default ParentComponent;
