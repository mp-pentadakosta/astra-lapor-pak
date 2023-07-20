import { RepositoryHistory } from "@/repository/admin/history/RepositoryHistory";
import { useEffect, useState } from "react";
import { DatumResponseHistoryEntity } from "@/repository/admin/history/entity/ResponseHistoryEntity";
import FormatDate from "@/utils/utils/format_date/FormatDate";
import { RepositoryHistoryUser } from "@/repository/user/history/RepositoryHistory";


export const HistoryUserViewModel = () => {

    const [ loading, setLoading ] = useState( false );

    const [ history, setHistory ] = useState<DatumResponseHistoryEntity[]>( [] );
    const getHistory = async ( tglMulai : string, tglSelesai : string ) => {
        // console.log( tglMulai, tglSelesai )
        setLoading( true )
        const resp = await RepositoryHistoryUser( tglMulai, tglSelesai )
        if ( resp !== null ) {
            setHistory( resp.data )
        }
        setLoading( false )
    }


    const [ searchHistory, setSearchHistory ] = useState<DatumResponseHistoryEntity[]>( [] );

    const [ searchData, setSearchData ] = useState( '' );

    const getSearchHistory = ( value : string ) => {
        const search = history.filter( ( item ) => {
            return item.pengajuan_name.toLowerCase().includes( value.toLowerCase() )
        } )


        setSearchHistory( search )

    }

    useEffect( () => {
        const date = new Date()
        const dateNow = new Date( date.getTime() )
        const dateMinusOneWeek = new Date( date.getTime() - (7 * 24 * 60 * 60 * 1000) )
        getHistory( FormatDate.dateStringToSend( dateMinusOneWeek.toUTCString() ), FormatDate.dateStringToSend( dateNow.toUTCString() ) )
        return () => {

        };
    }, [] );

    return {
        getHistory,
        history,
        loading,
        searchHistory,
        searchData,
        setSearchData,
        getSearchHistory,
    }
}
