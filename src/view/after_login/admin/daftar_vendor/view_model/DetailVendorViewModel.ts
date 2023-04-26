// import faker from 'faker';

import { RepositoryVendorChartDetail } from "@/repository/admin/vendor_chart_detail/RepositoryVendorChartDetail";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    DataResponseVendorChartDetailEntity
} from "@/repository/admin/vendor_chart_detail/entity/ResponseVendorChartDetailEntity";
import FormatMonth from "@/utils/utils/FormatMonth";


export const DetailVendorViewModel = () => {
    const pathname = usePathname();

    const year = new Date().getFullYear();
    const getId = () => {
        const splitPath = pathname.split( '/' );
        const id = splitPath[ splitPath.length - 1 ];
        console.log( 'id', id )
        return parseInt( id );
    }

    const [ vendor, setVendor ] = useState<DataResponseVendorChartDetailEntity>();
    const getChart = async ( year : string ) => {
        const resp = await RepositoryVendorChartDetail( getId(), year );
        if ( resp !== null ) {
            setVendor( resp.data )
        }
    }

    const labels : string[] = vendor?.countMonth.map( ( item ) => {
        return FormatMonth.monthToString( item.month ) ?? ''
    } ) ?? []
    //['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const options = {
        responsive : true,
        plugins : {
            legend : {
                position : 'top' as const,
            },
            title : {
                display : true,
                text : vendor?.nama_vendor ?? "",
            },
        },
    };

    const data = {
        labels,
        datasets : [
            {
                label : "Good",
                data : [ 1, 8, 20, 20, 30, 40, 40, 50, 30, 20, 10, 10 ],
                //     vendor?.countMonth.map((item) => {
                //     return item.count
                // }),//[11, 12, 22, 24, 32, 41, 45],
                borderColor : 'rgb(53, 162, 235)',
                backgroundColor : 'rgba(53, 162, 235, 0.5)',
            },
            {
                label : "Very Good",
                data : [ 0, 0, 24, 23, 31, 46, 48, 55, 37, 29, 19, 10 ],
                //     vendor?.countMonth.map((item) => {
                //     return item.count
                // }),//[11, 12, 22, 24, 32, 41, 45],
                borderColor : 'rgba(139,195,74,1)',
                backgroundColor : 'rgba(139,195,74,0.5)',
            },
            {
                label : "Poor",
                data : [ 0, 0, 26, 34, 22, 31, 15, 12, 23, 42, 31, 25 ],
                //     vendor?.countMonth.map((item) => {
                //     return item.count
                // }),//
                borderColor : 'rgba(255,193,7,1)',
                backgroundColor : 'rgba(255,193,7,0.5)',
            },
            {
                label : "Very Poor",
                data : [ 0, 2, 22, 24, 32, 41, 45, 22, 24, 32, 41, 45 ],
                //     vendor?.countMonth.map((item) => {
                //     return item.count
                // }),//
                borderColor : 'rgba(244,67,54,1)',
                backgroundColor : 'rgba(244,67,54,0.5)',
            },
        ],
    };


    useEffect( () => {
        getChart( new Date().getFullYear().toString() );
        return () => {

        };
    }, [] );

    return {
        data,
        options,
        vendor
    }
}
