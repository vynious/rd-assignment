import React from 'react';
import { UserTicket } from '../constants/userTicket';

interface ItemComponentProp {
    user: UserTicket;
    onClose: () => void;
}

export const ItemComponent: React.FC<ItemComponentProp> = ({ user, onClose }) => {
    return (
        <div className="relative p-6 bg-[#7CFFC4] rounded-lg shadow-xl max-w-lg mx-auto transition-transform duration-500 transform scale-100">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                User ID: {user.userId}
            </h1>
            <div className="max-h-[300px] overflow-y-auto p-4 bg-[#7CFFC4] rounded-lg">
                {user.train_tickets.map((ticket, index) => (
                    <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex mb-4">
                        <div className="border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal shadow-md mx-auto">
                            <h3 className="text-xl font-semibold mb-2">Train Number: {ticket.id}</h3>
                            <p className="text-sm text-gray-600">From: {ticket.from}</p>
                            <p className="text-sm text-gray-600">Destination: {ticket.destination || 'N/A'}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute top-0 right-0 mt-3 mr-3 bg-gray-400 text-gray-600 px-5 py-2 rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                onClick={onClose}
                aria-label="Close user details"
            >
                x
            </button>
        </div>
    );
};

export default ItemComponent;
