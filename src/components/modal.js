import { Button, Modal } from "react-bootstrap";
import './sidebar.css'
function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					Update Scores
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<div style={{ display: "flex", alignItems: "center" }}>
							<div
								style={{
									width: "30px",
									height: "30px",
									background: "#142683",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									color: "#fff",
									borderRadius: "50%",
									margin: "20px",
								}}
							>
								<p style={{ marginBottom: "0" }}>1</p>
							</div>
							<span style={{ color: "#566474" }}>
								Update your <span style={{ fontWeight: "500" }}>rank</span>
							</span>
						</div>
						<input
							style={{
								border: "1px solid #142683",
								color: "#142683",
								padding: "10px 30px",
								borderRadius: "5px",
							}}
							type={"number"}
						/>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						{" "}
						<div style={{ display: "flex", alignItems: "center" }}>
							<div
								style={{
									width: "30px",
									height: "30px",
									background: "#142683",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									color: "#fff",
									borderRadius: "50%",
									margin: "20px",
								}}
							>
								<p style={{ marginBottom: "0" }}>2</p>
							</div>
							<span style={{ color: "#566474" }}>
								Update your{" "}
								<span style={{ fontWeight: "500" }}>percentile</span>
							</span>
						</div>
						<input
							style={{
								border: "1px solid #142683",
								color: "#142683",
								padding: "10px 30px",
								borderRadius: "5px",
							}}
							type={"number"}
						/>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<div style={{ display: "flex", alignItems: "center" }}>
							<div
								style={{
									width: "30px",
									height: "30px",
									background: "#142683",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									color: "#fff",
									borderRadius: "50%",
									margin: "20px",
								}}
							>
								<p style={{ marginBottom: "0" }}>3</p>
							</div>
							<span style={{ color: "#566474" }}>
								Update your{" "}
								<span style={{ fontWeight: "500" }}>
									current score (out of 15)
								</span>
							</span>
						</div>
						<input
							style={{
								border: "1px solid #142683",
								color: "#142683",
								padding: "10px 30px",
								borderRadius: "5px",
							}}
							type={"number"}
						/>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<button
					// variant="outline-primary" 
                    className="btn-hov"
					// style={{ outline: "#142683", color: "#142683" }}
					onClick={props.onHide}
				>
					Cancel
				</button>
				<button className="save" onClick={props.onHide}>Save</button>
			</Modal.Footer>
		</Modal>
	);
}
export default MyVerticallyCenteredModal;
