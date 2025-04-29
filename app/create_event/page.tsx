"use client";
import React, { useState } from 'react';

interface Ticket {
  name: string;
  spaces: number | '';
}

function CreateEventForm() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [tickets, setTickets] = useState<Ticket[]>([{ name: '', spaces: '' }]);

  const handleAddTicket = () => {
    if (tickets.length < 3) {
      setTickets([...tickets, { name: '', spaces: '' }]);
    }
  };

  const handleTicketChange = (index: number, field: 'name' | 'spaces', value: string) => {
    const newTickets = [...tickets];
    newTickets[index] = { ...newTickets[index], [field]: value };
    setTickets(newTickets);
  };

  const handleRemoveTicket = (index: number) => {
    if (tickets.length > 1) {
      const newTickets = tickets.filter((_, i) => i !== index);
      setTickets(newTickets);
    }
  };

  const calculateTotalTickets = () => {
    return tickets.reduce((sum, ticket) => sum + (typeof ticket.spaces === 'number' ? ticket.spaces : 0), 0);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const eventData = {
      eventName,
      eventDate,
      startTime,
      endTime,
      eventDetails,
      tickets: tickets.map(ticket => ({ ...ticket, spaces: Number(ticket.spaces) })),
    };
    console.log('Event Data:', eventData); //can't get the database working
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Create an event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="eventName" className="block text-gray-700 text-sm font-bold mb-2">
            Event name
          </label>
          <input
            type="text"
            id="eventName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="eventDate" className="block text-gray-700 text-sm font-bold mb-2">
            Which date will your event take place on
          </label>
          <input
            type="date"
            id="eventDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="startTime" className="block text-gray-700 text-sm font-bold mb-2">
              Start time
            </label>
            <input
              type="time"
              id="startTime"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="endTime" className="block text-gray-700 text-sm font-bold mb-2">
              End time
            </label>
            <input
              type="time"
              id="endTime"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="eventDetails" className="block text-gray-700 text-sm font-bold mb-2">
            Event details
          </label>
          <textarea
            id="eventDetails"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={eventDetails}
            onChange={(e) => setEventDetails(e.target.value)}
            rows={4}
          />
          <p className="text-gray-500 text-xs mt-1">209 of 7500 characters</p>
        </div>

        <div className="border p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Create your tickets</h2>
          <p className="text-gray-600 text-sm mb-2">Create and name your ticket. You must name at least one ticket but you can create up to 3 ticket types.</p>
          {tickets.map((ticket, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <label htmlFor={`ticketName-${index}`} className="block text-gray-700 text-sm font-bold mb-1">
                  Ticket
                </label>
                <input
                  type="text"
                  id={`ticketName-${index}`}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={ticket.name}
                  onChange={(e) => handleTicketChange(index, 'name', e.target.value)}
                  required={index === 0} 
                />
              </div>
              <div>
                <label htmlFor={`ticketSpaces-${index}`} className="block text-gray-700 text-sm font-bold mb-1">
                  Number of spaces
                </label>
                <input
                  type="number"
                  id={`ticketSpaces-${index}`}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={ticket.spaces}
                  onChange={(e) => handleTicketChange(index, 'spaces', e.target.value)}
                  min="0"
                />
              </div>
              {tickets.length > 1 && (
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700 font-semibold"
                  onClick={() => handleRemoveTicket(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          {tickets.length < 3 && (
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleAddTicket}
            >
              Add Ticket
            </button>
          )}
          <div className="mt-2">
            <p className="font-semibold">0 Tickets total</p> {/* Dynamic calculation needed */}
            <p className="font-semibold">{calculateTotalTickets()} Tickets total</p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEventForm;