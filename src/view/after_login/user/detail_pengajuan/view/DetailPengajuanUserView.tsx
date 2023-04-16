export const DetailPengajuanUserView = () => {
    return <section className = "invoice printableArea">
        <div className = "row">
            <div className = "col-sm-6">
                <div className = "float-end mt-3">
                    <h5 className = "text-dark">Hello, Jhone Doe</h5>
                    <p className = "text-muted ">Please find below a cost-breakdown for the recent work completed.
                                                 Please make payment at your earliest convenience, and do not hesitate
                                                 to contact me with any questions.</p>
                </div>

            </div>

            <div className = "col-sm-4 offset-sm-2">
                <div className = "mt-3 float-sm-end">
                    <p className = "text-fade">
                        <span className = "text-dark">Order Date:</span>
                        &nbsp;&nbsp;&nbsp; Jan 17, 2021
                    </p>
                    <p className = "text-fade">
                        <span className = "text-dark">Order Status:</span>
                        <span className = "badge bg-success float-end">Paid</span></p>
                    <p className = "text-fade">
                        <span className = "text-dark">Order ID:</span>
                        <span className = "float-end">#123456</span></p>
                </div>
            </div>

            <div className = "row mt-4">
                <div className = "col-sm-4 text-fade">
                    <h6 className = "text-dark">Billing Address</h6>
                    <div>
                        Kheby Doe<br/>
                        125 Lorem Ave, Suite 512<br/>
                        Miami, FL 94107<br/>
                        <abbr title = "Phone">P:</abbr> (123) 456-7890
                    </div>
                </div>

                <div className = "col-sm-4 text-fade">
                    <h6 className = "text-dark">Shipping Address</h6>
                    <div>
                        Nil Yeager<br/>
                        123 Lorem Ave, Suite 845<br/>
                        Miami, FL 94107<br/>
                        <abbr title = "Phone">P:</abbr> (123) 456-7890
                    </div>
                </div>


                <div className = "col-sm-4">
                    <div className = "text-sm-end">
                        <img src = "/images/qrcode.png"
                             alt = "barcode-image"
                             className = "w-150 img-fluid me-2"/>
                    </div>
                </div>

            </div>

            <div className = "row">
                <div className = "col-12">
                    <div className = "table-responsive">
                        <table className = "text-fade table-bordered table mt-4">
                            <thead>
                            <tr>
                                <th className = "text-dark">#</th>
                                <th className = "text-dark">Item</th>
                                <th className = "text-dark">Quantity</th>
                                <th className = "text-dark">Unit Cost</th>
                                <th className = "text-end text-dark">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <span className = "text-dark">Laptop</span> <br/>
                                    Brand Model VGN-TXN27N/B
                                    11.1" Notebook PC
                                </td>
                                <td>1</td>
                                <td>$1799.00</td>
                                <td className = "text-end">$1799.00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <span className = "text-dark">Warranty</span> <br/>
                                    Two Year Extended Warranty -
                                    Parts and Labor
                                </td>
                                <td>3</td>
                                <td>$499.00</td>
                                <td className = "text-end">$1497.00</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <span className = "text-dark">LED</span> <br/>
                                    80cm (32) HD Ready LED TV
                                </td>
                                <td>2</td>
                                <td>$412.00</td>
                                <td className = "text-end">$824.00</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className = "row">
                <div className = "col-sm-6 text-fade">
                    <div className = "clearfix pt-3">
                        <h5 className = "text-dark">Notes:</h5>
                        <small>
                            All accounts are to be paid within 7 days from receipt of
                            invoice. To be paid by cheque or credit card or direct payment
                            online. If account is not paid within 7 days the credits details
                            supplied as confirmation of work undertaken will be charged the
                            agreed quoted fee noted above.
                        </small>
                    </div>
                </div>
                <div className = "col-sm-6">
                    <div className = "float-end text-fade mt-3 mt-sm-0">
                        <p><span className = "text-dark">Sub-total:</span> <span className = "float-end">$4120.00</span>
                        </p>
                        <p><span className = "text-dark">VAT (12.5):</span> <span className = "float-end">$515.00</span>
                        </p>
                        <h3>$4635.00 USD</h3>
                    </div>
                    <div className = "clearfix"></div>
                </div>
            </div>

            <div className = "d-print-none mt-4">
                <div className = "text-end">
                    <a href = "javascript:window.print()"
                       className = "btn btn-primary-light me-10"><i className = "mdi mdi-printer"></i> Print</a>
                    <a href = "javascript: void(0);" className = "btn btn-primary">Submit</a>
                </div>
            </div>
        </div>
    </section>
}
