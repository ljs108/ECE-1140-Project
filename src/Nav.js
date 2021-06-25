import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineControl } from 'react-icons/ai';
import { IoTrainOutline } from 'react-icons/io5';
import { BiSitemap } from 'react-icons/bi';

function NavComponent() {

	const history = useHistory();

	return (
		<SideNav
			onSelect={(selected) => {
				history.push(`/${selected}`);
			}}
			style={{ background: "#1C4E80" }}
		>
			<SideNav.Toggle />
			<SideNav.Nav defaultSelected="CTC">
				<NavItem eventKey="CTC">
						<NavIcon>
							<BiSitemap size="1.75em" />
						</NavIcon>
						<NavText>
							CTC Dashboard
						</NavText>
				</NavItem>
				<NavItem eventKey="TrainController">
					<NavIcon>
						<AiOutlineControl size="1.75em" />
					</NavIcon>
					<NavText>
						Train Controller
					</NavText>
				</NavItem>
				<NavItem eventKey="TrainModel">
					<NavIcon>
						<IoTrainOutline size="1.75em" />
					</NavIcon>
					<NavText>
						Train Model
					</NavText>
				</NavItem>
			</SideNav.Nav>
		</SideNav>
	);
}

export default NavComponent