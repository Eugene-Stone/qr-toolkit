import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
	return (
		<nav className="header">
			<div className="logo">
				<NavLink to={'/qr-toolkit'}>
					<span>Home</span>
				</NavLink>
			</div>

			<ul>
				<li>
					<NavLink to={'/qr-toolkit/generate'}>Generator</NavLink>
				</li>
				<li>
					<NavLink to={'/qr-toolkit/generate-history'}>Generate history</NavLink>
				</li>
				<li>
					<NavLink to={'/qr-toolkit/scan'}>Scanning</NavLink>
				</li>

				<li>
					<NavLink to={'/qr-toolkit/scan-history'}>Scanning history</NavLink>
				</li>
			</ul>
		</nav>
	);
}
