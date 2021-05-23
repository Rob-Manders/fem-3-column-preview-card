
import React, {useState} from 'react'
import {Card, Vehicle} from './components/'

export default function App() {
	const [vehicles, setVehicles] = useState([
		{
			id: 0,
			type: 'sedan',
			title: 'Sedans',
			description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip',
			icon: 'images/icon-sedans.svg'
		},
		{
			id: 1,
			type: 'suv',
			title: 'SUVs',
			description: 'Take an SUV for its spacious interior, power, ans versatility. Perfect for your next family vacation and off-road adventures.',
			icon: 'images/icon-suvs.svg'
		},
		{
			id: 2,
			type: 'luxury',
			title: 'Luxury',
			description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
			icon: 'images/icon-luxury.svg'
		}
	])

	return (
		<>
			<Card>
				{
					vehicles.map(vehicle => <Vehicle key={`vehicle_${vehicle.id}`} vehicle={vehicle} />)
				}
			</Card>
		</>
	)
}
