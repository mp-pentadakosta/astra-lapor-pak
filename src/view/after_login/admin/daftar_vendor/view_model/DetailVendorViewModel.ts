// import faker from 'faker';

export const DetailVendorViewModel = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Data Vendor',
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [1, 10, 20, 22, 30, 40, 50],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [11, 12, 22, 24, 32, 41, 45],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return {
        data,
        options
    }
}
