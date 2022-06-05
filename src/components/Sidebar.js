import React, { useState } from "react";
import { BsBarChartFill } from "react-icons/bs";
import { FaAward, FaCcJcb, FaFile } from "react-icons/fa";
import "./sidebar.css";
import MyVerticallyCenteredModal from './modal'
import Chart from "react-apexcharts";
const Sidebar = () => {
      const [modalShow, setModalShow] = useState(false);

	const stat = {
		series: [15, 7],
		options: {
			chart: {
				type: "donut",
			},
			// responsive: [
			// 	{
			// 		breakpoint: 480,
			// 		options: {
			// 			chart: {
			// 				width: 200,
			// 			},
			// 			// legend: {
			// 			// 	position: "bottom",
			// 			// },
			// 		},
			// 	},
			// ],
		},
	};
	const state = {
		series: [
			{
				data: ["10%", "15%", "37%", "30%", "7%", "51%"],
			},
		],

		options: {
			chart: {
				height: 350,
				type: "line",
				zoom: {
					enabled: false,
				},
			},

			annotations: {
				xaxis: [
					{
						x: "20%",
						x2: "40%",
						fillColor: "#B3F7CA",
						opacity: 0.4,
						label: {
							borderColor: "#B3F7CA",
							style: {
								fontSize: "10px",
								color: "#fff",
							},
						},
					},
				],
				points: [
					{
						x: "40%",
						y: 37,
						marker: {
							size: 8,
							fillColor: "#fff",
							strokeColor: "red",
							radius: 2,
							cssClass: "apexcharts-custom-class",
						},
						label: {
							borderColor: "#438AF6",
							offsetY: 0,
							style: {
								color: "#fff",
								background: "#438AF6",
							},

							// text: "Point Annotation",
						},
					},
					{
						x: new Date("08 Dec 2017").getTime(),
						y: 9340.85,
						marker: {
							size: 0,
						},
						image: {
							path: "../../assets/images/ico-instagram.png",
						},
					},
				],
			},

			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "straight",
			},
			title: {
				align: "left",
			},
			// grid: {
			// 	row: {
			// 		// colors: ["#E5F4EB", "transparent"],
			// 		opacity: 0.5,
			// 	},
			// },

			xaxis: {
				categories: ["0%", "20%", "40%", "60%", "80%", "100%"],
			},
			// colors: ["#309255"],
		},
	};

	return (
		<div style={{ display: "flex" }}>
			<div
				style={{
					height: "-webkit-fill-available",
					width: "20%",
					borderRight: "1px solid  #EBF0F5",
					padding: "40px 30px",
				}}
			>
				<div
					className="hov"
					style={{
						padding: "40px 40px",
						fontSize: "20px",
						fontWeight: "500",
						lineHeight: "28px",
					}}
				>
					<BsBarChartFill /> Dashboard
				</div>
				<div
					className="hov-2"
					style={{
						padding: "40px 40px",
						fontSize: "20px",
						fontWeight: "500",
						lineHeight: "28px",
					}}
				>
					<FaAward /> Skill Test
				</div>
				<div
					className="hov-1"
					style={{
						padding: "40px 40px",
						fontSize: "20px",
						fontWeight: "500",
						lineHeight: "28px",
					}}
				>
					<FaFile /> Internship
				</div>
			</div>

			<div
				style={{
					// height: "-webkit-fill-available",
					width: "50%",
					padding: "40px 30px",
				}}
			>
				<p style={{ color: "#566474" }}>Skill Test</p>

				<div
					style={{
						border: "1px solid #EBF0F5",
						padding: "20px",
						borderRadius: "10px",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div style={{ display: "flex" }}>
						<img src="html.png" alt="" width={50} />
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								marginLeft: "5px",
							}}
						>
							<h3 style={{ marginBottom: "2px" }}>Hypertext MarkUp Language</h3>
							<p style={{ color: "#566474", marginTop: "0" }}>
								Questions:08 | Duration 15 min | Submitted on 15 June 2022
							</p>
						</div>
					</div>
					<button
						onClick={() => setModalShow(true)}
						style={{
							border: "0",
							background: "#142683",
							color: "#ffffff",
							width: "120px",
							height: "44px",
							borderRadius: "5px",
						}}
					>
						Update
					</button>
					<MyVerticallyCenteredModal
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				</div>
				<div
					style={{
						border: "1px solid #EBF0F5",
						padding: "20px",
						borderRadius: "10px",
						// display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: "25px",
					}}
				>
					<h3>Quick Statistics</h3>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-evenly",
						}}
					>
						<div
							style={{
								justifyContent: "center",
								alignItems: "center",
								display: "flex",
							}}
						>
							<div
								style={{
									displa: "flex",
									flexDirection: "row",
									width: "fitContent",
									flexWrap: "wrap",
								}}
							>
								{" "}
								<div
									style={{
										background: "#EBF0F5",
										borderRadius: "50%",
										width: "50px",
										height: "50px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<img src="trophy.png" alt="" />
								</div>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									marginLeft: "10px",
								}}
							>
								{" "}
								<h3 h3 style={{ marginBottom: "2px" }}>
									12890
								</h3>
								<p style={{ color: "#566474", marginTop: "0" }}>Your rank</p>
							</div>
						</div>
						<div
							style={{
								// borderRight: "1px solid #EBF0F5",
								height: "50px",
								padding: "0 30px",
							}}
						></div>
						<div
							style={{
								displa: "flex",
								flexDirection: "row",
								// width: "fitContent",
								marginLeft: "30px",
								flexWrap: "wrap",
							}}
						>
							{" "}
							<div
								style={{
									background: "#EBF0F5",
									borderRadius: "50%",
									width: "50px",
									height: "50px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<img src="percent.png" alt="" />
							</div>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								marginLeft: "10px",
							}}
						>
							{" "}
							<h3 h3 style={{ marginBottom: "2px" }}>
								37%
							</h3>
							<p style={{ color: "#566474", marginTop: "0" }}>Percentile</p>
						</div>

						<div
							style={{
								// borderRight: "1px solid #EBF0F5",
								height: "50px",
								padding: "0 30px",
							}}
						></div>
						<div
							style={{
								displa: "flex",
								flexDirection: "row",
								// width: "fitContent",
								marginLeft: "30px",
								flexWrap: "wrap",
							}}
						>
							{" "}
							<div
								style={{
									background: "#EBF0F5",
									borderRadius: "50%",
									width: "50px",
									height: "50px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<img src="tick.png" alt="" />
							</div>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								marginLeft: "10px",
							}}
						>
							{" "}
							<h3 h3 style={{ marginBottom: "2px" }}>
								37%
							</h3>
							<p style={{ color: "#566474", marginTop: "0" }}>
								Correct Answer{" "}
							</p>
						</div>
					</div>
				</div>

				<div
					style={{
						border: "1px solid #EBF0F5",
						padding: "20px",
						borderRadius: "10px",
						// display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: "25px",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						{" "}
						<div style={{ width: "70%" }}>
							<p style={{ fontSize: "20px", fontWeight: "700" }}>
								Comparison Graph
							</p>
							<p style={{ color: "#566474", lineHeight: "21px" }}>
								<span style={{ fontWeight: "500", marginBottom: "0" }}>
									You scored 37% percentile
								</span>{" "}
								which is lower than the
								<p style={{ marginTop: "0" }}>
									{" "}
									average percentile 72% of all the engineers who took this
									assessment
								</p>
							</p>
						</div>
						<div
							style={{
								background: "#EBF0F5",
								borderRadius: "50%",
								width: "50px",
								height: "50px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<img src="graph.png" alt="" />
						</div>
					</div>
					<div className="graph">
						<div className="mixed-chart">
							<Chart
								options={state.options}
								series={state.series}
								type="line"
								height={350}
								width="100%"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					// display: "flex",
					// flexDirection: "column",
					width: "30%",
					// height:"100%",
					marginTop: "93px",
					marginRight: "30px",
					// padding: "40px 30px 0 30px",
					// borderRadius: "10px",
				}}
			>
				<div
					style={{
						marginBottom: "30px",
						border: "1px solid #EBF0F5",
						padding: "30px",
						borderRadius: "10px",
					}}
				>
					<h3 style={{ fontWeight: "700" }}>Syllabus wise Analysis</h3>

					<div>
						<p style={{ color: "#566474" }}>HTML tools,Forms,History</p>
						<div className="container">
							<div className="item-bar" style={{ backgroundColor: "#ecf3fe" }}>
								<div
									className="bar-line"
									style={{
										backgroundColor: " #438AF6",

										width: "80%",
									}}
								></div>
							</div>

							<span className="percentage" style={{ color: " #438AF6" }}>
								80%
							</span>
						</div>
					</div>
					<div>
						{/* <h3 style={{ fontWeight: "700" }}>Syllabus wise Analysis</h3> */}
						<p style={{ color: "#566474" }}>Tags & References in HTML</p>
						<div className="container">
							{" "}
							<div className="item-bar" style={{ backgroundColor: "#fff4ec" }}>
								<div
									className="bar-line"
									style={{
										backgroundColor: " #FF9142",

										width: "60%",
									}}
								></div>
							</div>
							<span className="percentage" style={{ color: " #FF9142" }}>
								60%
							</span>
						</div>
					</div>
					<div className="">
						{/* <h3 style={{ fontWeight: "700" }}>Syllabus wise Analysis</h3> */}
						<p style={{ color: "#566474" }}>Tables & CSS Basics</p>
						<div className="container">
							<div className="item-bar" style={{ backgroundColor: "#ffefef" }}>
								<div
									className="bar-line"
									style={{
										backgroundColor: " #FB5E5E",

										width: "24%",
									}}
								></div>
							</div>
							<span className="percentage" style={{ color: " #FB5E5E" }}>
								24%
							</span>
						</div>
					</div>
					<div>
						{/* <h3 style={{ fontWeight: "700" }}>Syllabus wise Analysis</h3> */}
						<p style={{ color: "#566474" }}>Tables & CSS Basics</p>
						<div className="container">
							<div className="item-bar" style={{ backgroundColor: "#eafaf1" }}>
								<div
									className="bar-line"
									style={{
										backgroundColor: " #2EC971",

										width: "96%",
									}}
								></div>
							</div>
							<span className="percentage" style={{ color: " #2EC971" }}>
								96%
							</span>
						</div>
					</div>
				</div>
				<div
					style={{
						border: "1px solid #EBF0F5",
						padding: "30px",
						borderRadius: "10px",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						{" "}
						<h3>Question Analysis</h3>
						<span style={{ color: "#438AF6", fontWeight: "500" }}>07/15</span>
					</div>
					<p style={{ color: "#566474" }}>
						<span style={{ fontWeight: "500" }}>
							You scored 7 question correct out of 15.
						</span>{" "}
						However it still needs some improvements
					</p>

					<div>
						<Chart
							options={stat.options}
							series={stat.series}
							type="donut"
							// height={350}
							width="100%"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
