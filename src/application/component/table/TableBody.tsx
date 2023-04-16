export const TableBody = () => {
    return <table className = "table">
        <thead>
        <tr>
            <th style = { {
                width : "40%",
            } }>Name
            </th>
            <th className = "d-none d-md-table-cell"
                style = { {
                    width : "25%",
                } }>Date of Birth
            </th>
            <th style = { {
                width : "15%",
            } }>Actions
            </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Ashley Briggs</td>
            <td className = "d-none d-md-table-cell text-fade">Jun 21, 1961</td>
            <td className = "table-action min-w-100">
                <a href = "#"
                   className = "text-fade hover-primary"><i className = "align-middle"
                                                            data-feather = "edit-2"></i></a>
                <a href = "#"
                   className = "text-fade hover-primary"><i className = "align-middle"
                                                            data-feather = "trash"></i></a>
            </td>
        </tr>
        <tr>
            <td>Carl Jenkins</td>
            <td className = "d-none d-md-table-cell text-fade">May 15, 1948</td>
            <td className = "table-action">
                <a href = "#"
                   className = "text-fade hover-primary"><i className = "align-middle"
                                                            data-feather = "edit-2"></i></a>
                <a href = "#"
                   className = "text-fade hover-primary"><i className = "align-middle"
                                                            data-feather = "trash"></i></a>
            </td>
        </tr>
        <tr>
            <td>Bertha Martin</td>
            <td className = "d-none d-md-table-cell text-fade">Sep 14, 1965</td>
            <td className = "table-action">
                <a href = "#"
                   className = "text-fade hover-primary"><i className = "align-middle"
                                                            data-feather = "edit-2"></i></a>
                <a href = "#"
                   className = "text-fade hover-primary"><i className = "align-middle"
                                                            data-feather = "trash"></i></a>
            </td>
        </tr>
        <tr>
            <td>Stacie Hall</td>
            <td className = "d-none d-md-table-cell text-fade">Apr 2, 1971</td>
            <td className = "table-action">
                <a href = "#"
                   className = "text-fade hover-primary"><i className = "align-middle"
                                                            data-feather = "edit-2"></i></a>
                <a href = "#"
                   className = "text-fade hover-primary"><i className = "align-middle"
                                                            data-feather = "trash"></i></a>
            </td>
        </tr>
        <tr>
            <td>Amanda Jones</td>
            <td className = "d-none d-md-table-cell text-fade">Oct 12, 1966</td>
            <td className = "table-action">
                <a href = "#"
                   className = "text-fade hover-primary"><i className = "align-middle"
                                                            data-feather = "edit-2"></i></a>
                <a href = "#"
                   className = "text-fade hover-primary"><i className = "align-middle"
                                                            data-feather = "trash"></i></a>
            </td>
        </tr>
        </tbody>
    </table>
}
