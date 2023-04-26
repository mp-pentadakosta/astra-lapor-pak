export const CharViewModel = () => {
    const labels: string[] = ['febri', 'meddy', "pikri"]
    //['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: "Chart",
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: "Good",
                data: [1, 2, 1],
                //     vendor?.countMonth.map((item) => {
                //     return item.count
                // }),//[11, 12, 22, 24, 32, 41, 45],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: "Very Good",
                data: [1, 2, 1],
                //     vendor?.countMonth.map((item) => {
                //     return item.count
                // }),//[11, 12, 22, 24, 32, 41, 45],
                borderColor: 'rgba(139,195,74,1)',
                backgroundColor: 'rgba(139,195,74,0.5)',
            },
            {
                label: "Poor",
                data: [1, 1, 3],
                //     vendor?.countMonth.map((item) => {
                //     return item.count
                // }),//
                borderColor: 'rgba(255,193,7,1)',
                backgroundColor: 'rgba(255,193,7,0.5)',
            },
            {
                label: "Very Poor",
                data: [1, 2, 1],
                //     vendor?.countMonth.map((item) => {
                //     return item.count
                // }),//
                borderColor: 'rgba(244,67,54,1)',
                backgroundColor: 'rgba(244,67,54,0.5)',
            },
        ],
    };
    return {
        labels,
        options,
        data
    }
}
