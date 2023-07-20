// import faker from 'faker';

import { RepositoryVendorChartDetail } from "@/repository/admin/vendor_chart_detail/RepositoryVendorChartDetail";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    DataResponseVendorChartDetailEntity
} from "@/repository/admin/vendor_chart_detail/entity/ResponseVendorChartDetailEntity";
import { ModelValueVendor } from "@/view/after_login/admin/daftar_vendor/model/ModelValueVendor";


export const DetailVendorViewModel = () => {
    const pathname = usePathname();

    const year = new Date().getFullYear();
    const getId = () => {
        const splitPath = pathname.split( '/' );
        const id = splitPath[ splitPath.length - 1 ];
        return parseInt( id );
    }

    const [ loading, setLoading ] = useState( false );

    const [ vendor, setVendor ] = useState<DataResponseVendorChartDetailEntity>();
    const [ valueVendor, setValueVendor ] = useState<ModelValueVendor[]>( [] );
    const getChart = async ( year : string ) => {
        setLoading( true );
        setValueVendor( [] )
        const resp = await RepositoryVendorChartDetail( getId(), year );
        if ( resp !== null ) {
            setVendor( resp.data )
            let valueDataVendor : ModelValueVendor[] = []
            let good : number = 0;
            let veryGood : number = 0;
            let poor : number = 0;
            let veryPoor : number = 0;
            resp.data.countMonth.forEach( ( item, index ) => {
                resp.data.countMonth[ index ].rating.forEach( ( item2 ) => {
                    if ( item2.name === "Poor" ) {
                        poor = poor + item2.value;
                    }
                    if ( item2.name === "Very Poor" ) {
                        veryPoor = veryPoor + item2.value;
                    }
                    if ( item2.name === "Good" ) {
                        good = good + item2.value;
                    }
                    if ( item2.name === "Very Good" ) {
                        veryGood = veryGood + item2.value;
                    }
                } )
            } )
            valueDataVendor.push( {
                title : "Poor",
                value : [ poor ],
                borderColor : 'rgba(255,193,7,1)',
                backgroundColor : 'rgba(255,193,7,0.5)',
            } )
            valueDataVendor.push( {
                title : "Very Poor",
                value : [ veryPoor ],
                borderColor : 'rgb(255, 99, 132)',
                backgroundColor : 'rgb(255, 99, 132)',
            } )
            valueDataVendor.push( {
                title : "Good",
                value : [ good ],
                borderColor : 'rgba(3,169,244,1)',
                backgroundColor : 'rgba(3,169,244,0.5)',
            } )
            valueDataVendor.push( {
                title : "Very Good",
                value : [ veryGood ],
                borderColor : 'rgba(139,195,74,1)',
                backgroundColor : 'rgba(139,195,74,0.5)',
            } )
            setValueVendor( valueDataVendor )
        }
        setLoading( false );
    }

    const labels : string[] = [ "" ]

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
        datasets : valueVendor.map( ( item ) => {
            return {
                label : item.title,
                data : item.value,
                borderColor : item.borderColor,
                backgroundColor : item.backgroundColor,
            }
        } )
        //     vendor?.countMonth.map( ( item ) => {
        //     return {
        //         label : FormatMonth.monthToString( item.month ) ?? '',
        //         data : item.rating.map( ( item2 ) => {
        //             return item2.value
        //         } ),
        //     }
        // } ) ?? []
        //     [
        //         {
        //             label : "Good",
        //             data : [ 1, ],
        //             borderColor : 'rgb(53, 162, 235)',
        //             backgroundColor : 'rgba(53, 162, 235, 0.5)',
        //         },
        //         {
        //             label : "Poor",
        //             data : [ 8, ],
        //             borderColor : 'rgb(53, 162, 235)',
        //             backgroundColor : 'rgba(53, 162, 235, 0.5)',
        //         },
        //         {
        //             label : "Very Good",
        //             data : [ 5, ],
        //             borderColor : 'rgb(53, 162, 235)',
        //             backgroundColor : 'rgba(53, 162, 235, 0.5)',
        //         },
        //         {
        //             label : "Very Poor",
        //             data : [ 2, ],
        //             borderColor : 'rgb(53, 162, 235)',
        //             backgroundColor : 'rgba(53, 162, 235, 0.5)',
        //         },
        //     ],
    };


    useEffect( () => {
        getChart( new Date().getFullYear().toString() );
        return () => {

        };
    }, [] );

    return {
        data,
        options,
        vendor,
        loading,
    }
}
