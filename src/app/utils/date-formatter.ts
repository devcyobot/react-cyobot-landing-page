const formatDate = (isoString: string): string => {
	const date = new Date(isoString);
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	let formattedDate = date.toLocaleDateString("en-US", options);

	const day = date.getDate();
	let suffix = "th";

	if (day % 10 === 1 && day !== 11) suffix = "st";
	else if (day % 10 === 2 && day !== 12) suffix = "nd";
	else if (day % 10 === 3 && day !== 13) suffix = "rd";

	formattedDate = formattedDate.replace(day.toString(), `${day}${suffix}`);

	return formattedDate;
};

export default formatDate;
