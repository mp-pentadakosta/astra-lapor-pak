import { TableBody } from "@/application/component/table/TableBody";


export const TableView = () => {
    return <section className = "content">
        <div className = "row">
            <div className = "col-12 col-xl-12">
                <div className = "card">
                    <div className = "card-header">
                        <h5 className = "card-title">Basic Table</h5>
                        <p className = "mb-0 card-subtitle text-muted">
                            Using the most basic table markup, here’s how .table-based tables look in
                            Bootstrap.</p>
                    </div>
                    <div className = "card-body">
                        <TableBody/>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
