import moment from "moment";

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
