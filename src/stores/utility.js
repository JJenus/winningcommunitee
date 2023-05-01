import moment from "moment";
import swal from "sweetalert";

function notify(icon, title, message = "") {
	swal({
		title: title,
		text: message,
		icon: icon,
		buttons: {
			close: {
				text: "Close",
				value: false,
				visible: true,
				className: "btn btn-outline-primary",
				closeModal: true,
			},
		},
	});
}

export const alert = {
	success(title = "Success", message = "") {
		notify("success", title, message);
	},
	error(title, message = "") {
		notify("error", title, message);
	},
	info(title, message = "") {
		notify("info", title, message);
	},
	verify() {
		swal({
			title: "Verify account",
			content:
				"<p class='text-center'>Click on start verification or come back at your convinience</p>",
			icon: "warning",
			buttons: {
				verification: {
					text: "Start verification",
					value: true,
					visible: true,
					className: "btn btn-outline-secondary",
					closeModal: true,
				},
				close: {
					text: "Close",
					value: false,
					visible: true,
					className: "btn btn-outline-primary",
					closeModal: true,
				},
			},
			dangerMode: false,
		}).then((next) => {
			if (next) {
				document.querySelector(".btn-close").click();
				// open verification dialogue
				document.querySelector("#btn-verify-modal").click();
			} else {
				// do nothing
			}
		});
	},
};

export const util = {
	format: function (number, decPlaces = 2, decSep = ".", thouSep = ",") {
		(decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces),
			(decSep = typeof decSep === "undefined" ? "." : decSep);
		thouSep = typeof thouSep === "undefined" ? "," : thouSep;
		var sign = number < 0 ? "-" : "";
		var i = String(
			parseInt(
				(number = Math.abs(Number(number) || 0).toFixed(decPlaces))
			)
		);
		var j = (j = i.length) > 3 ? j % 3 : 0;

		return (
			sign +
			(j ? i.slice(0, j) + thouSep : "") +
			i.slice(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
			(decPlaces
				? decSep +
				  Math.abs(number - i)
						.toFixed(decPlaces)
						.slice(2)
				: "")
		);
	},
	resizeImg(uri, width = 100) {
		let uArr = uri.split(".com/");
		return uArr.join(`.com/resize=width:${width}/`);
	},
};

export const storage = {
	save(type, data) {
		if (data.length < 1) return;
		const obj = {
			data: data,
			time: moment().format("YYYY-MM-DD HH:mm:ss"),
		};

		localStorage.setItem("wc_pack_" + type, JSON.stringify(obj));
	},

	reload(type = "superpick") {
		console.log("Reloading from localstorage...");
		const obj = localStorage.getItem("wc_pack_" + type);
		if (obj !== "undefined" && obj !== null && obj) {
			const data = JSON.parse(obj);
			let isExp = moment(data.time).isAfter(
				moment().format("YYYY-MM-DD HH:mm:ss")
			);
			if (isExp) {
				return [];
			}
			console.log(data.data);
			return data.data;
		} else {
			console.log("not found", obj);
		}
		return [];
	},
};
