import { RepositoryVendorChartAll } from "@/repository/admin/vendor_chart_all/RepositoryVendorChartAll";
import { useEffect, useState } from "react";
import {
    DatumResponseVendorChartAllEntity
} from "@/repository/admin/vendor_chart_all/entity/ResponseVendorChartAllEntity";


export const CharViewModel = () => {
    const [ year, setYear ] = useState( '0' );

    const [ loading, setLoading ] = useState( false );

    const [ listVendor, setListVendor ] = useState<DatumResponseVendorChartAllEntity[]>( [] );

    const [ good, setGood ] = useState<number[]>( [] );
    const [ veryGood, setVeryGood ] = useState<number[]>( [] );
    const [ poor, setPoor ] = useState<number[]>( [] );
    // const [ veryPoor, setVeryPoor ] = useState<number[]>( [] );
    const getListVendor = async ( data : string ) => {
        setLoading( true );
        const resp = await RepositoryVendorChartAll( data );
        if ( resp !== null ) {
            setListVendor( resp.data );
            setGood( resp.data.map( ( item ) => {
                return item.sum_rating.countGood;
            } ) );
            setVeryGood( resp.data.map( ( item ) => {
                return item.sum_rating.countVeryGood;
            } ) );
            setPoor( resp.data.map( ( item ) => {
                return item.sum_rating.countPoor;
            } ) );
            // setVeryPoor( resp.data.map( ( item ) => {
            //     return item.sum_rating.countVeryPoor;
            // } ) );
        }
        setLoading( false );
    }

    const labels : string[] = listVendor.map( ( item ) => {
        return item.nama_vendor;
    } )

    const options = {
        responsive : true,
        plugins : {
            legend : {
                position : 'top' as const,
            },
            title : {
                display : true,
                text : "Chart",
            },
        },
    };

    const data = {
        labels,
        datasets : [
            {
                label : "Good",
                data : good,//[ 1, 2, 1 ],
                //     vendor?.countMonth.map((item) => {
                //     return item.count
                // }),//[11, 12, 22, 24, 32, 41, 45],
                borderColor : 'rgb(53, 162, 235)',
                backgroundColor : 'rgba(53, 162, 235, 0.5)',
            },
            {
                label : "Very Good",
                data : veryGood,// [ 1, 2, 1 ],
                //     vendor?.countMonth.map((item) => {
                //     return item.count
                // }),//[11, 12, 22, 24, 32, 41, 45],
                borderColor : 'rgba(139,195,74,1)',
                backgroundColor : 'rgba(139,195,74,0.5)',
            },
            {
                label : "Poor",
                data : poor,// [ 1, 1, 3 ],
                //     vendor?.countMonth.map((item) => {
                //     return item.count
                // }),//
                borderColor : 'rgba(255,193,7,1)',
                backgroundColor : 'rgba(255,193,7,0.5)',
            },
            // {
            //     label : "Very Poor",
            //     data : veryPoor,// [ 1, 2, 1 ],
            //     //     vendor?.countMonth.map((item) => {
            //     //     return item.count
            //     // }),//
            //     borderColor : 'rgba(244,67,54,1)',
            //     backgroundColor : 'rgba(244,67,54,0.5)',
            // },
        ],
    };

    useEffect( () => {
        setYear( new Date().getFullYear().toString() );
        getListVendor( new Date().getFullYear().toString() );
        return () => {

        };
    }, [] );

    return {
        labels,
        options,
        data,
        loading,
        getListVendor,
        year,
        setYear,
    }
}
