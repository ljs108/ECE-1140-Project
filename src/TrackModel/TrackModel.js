import React, { useEffect, useState } from 'react';

import config from '../config';
import Firebase from "firebase";
import PropertiesPanel from './PropertiesPanel';
import StatesPanel from './StatesPanel';
import TrackView from './TrackView';
import UploadLayoutButton from './UploadLayoutButton';
import { left } from '@popperjs/core';

import { DatabaseGet, DatabaseSet }  from "../Database";

function TrackModel() {

	document.body.style.overflow='hidden';

	if (!Firebase.apps.length) {
		Firebase.initializeApp(config);
	}else {
		Firebase.app(); // if already initialized, use that one
	}

	const [parentName, setParentName] = useState('Block1');
	const [trainsList, setTrainsList] = useState({});
	const [jsonTree, setJsonTree] = useState([]);
	const [blockList, setBlockList] = useState([]);
	const [selectedBlock, setSelectedBlock] = useState({});

	useEffect(() => {
		DatabaseGet(setTrainsList, "TrainList");
	}, []);
	useEffect(() => {
		DatabaseGet(setJsonTree, "GreenLine");
	}, []);

	function getBlockListData() {
		let tempList = [];
		for (const [key,value] of Object.entries(jsonTree)) {
			tempList.push(value);
		}
		setBlockList(tempList);
	}

	useEffect(() => getBlockListData(), [jsonTree]);

	return (
		<>
			{/* <div style={{
				paddingTop: 20,
				textAlign: "left",
				paddingLeft: 100
			}}>
				<UploadLayoutButton />
			</div> */}
			{/* <div style={{
				paddingTop: 50,
				textAlign: "right",
				paddingRight: 340
			}}>
				<h2>Test of Interactive Track Layout</h2>
			</div> */}
			<div>
			{/* <div style={{paddingTop: 140,
							textAlign: "right",
							paddingRight: 500 }}> */}
					<TrackView setParentName={setParentName} setSelectedBlock={setSelectedBlock} trainsList={trainsList}/>
			</div>
			<div style={{
				display: "flex",
				flexDirection: "column"
			}}>
					<h2> Currently Selected: {selectedBlock} </h2>
			</div>
			<div style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "flex-start",
				alignItems: "flex-end",
				alignContent: "flex-start",
				bottom: 0,
				width: "100%",
				position: "absolute",
			}}>
				<PropertiesPanel selectedBlock={selectedBlock} blockList={blockList}/>
				{/* <StatesPanel parentName={parentName}/> */}
			</div>
		</>
	)
}

export default TrackModel
