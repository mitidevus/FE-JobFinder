function formatDate(date) {
    const now = new Date();
    const diffTime = date - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert difference to days

    if (diffDays <= 0) {
        return "Expired";
    } else if (diffDays === 1) {
        return "1 day left";
    } else {
        return `${diffDays} days left`;
    }
}

export default formatDate;
