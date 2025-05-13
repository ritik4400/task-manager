function fetchAllTasks(req, res){
    try {
        let { page = 1, limit = 5, sort = 'createdAt', order = 'asc', status } = req.query;

        page = parseInt(page);
        limit = parseInt(limit);

        let resultTasks = [...tasks];

        // filtering
        if (status) {
            resultTasks = resultTasks.filter((task) => task.status === status);
        }

        // sort
        resultTasks.sort((a, b) => {
            if (order === 'asc') {
                return a[sort] > b[sort] ? 1 : -1;
            } else {
                return a[sort] < b[sort] ? 1 : -1;
            }
        });

        //pagination
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        // slice array for pagination
        const paginatedTasks = resultTasks.slice(startIndex, endIndex);

        res.status(200).json({
            page,
            limit,
            totalItems: resultTasks.length,
            totalPages: Math.ceil(resultTasks.length / limit),
            data: paginatedTasks,
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error: Unable to fetch tasks." });
    }
};

module.exports = {
    fetchAllTasks
}
