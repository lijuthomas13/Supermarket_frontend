import { useRef } from 'react';
import { jsPDF } from 'jspdf';
import '../styles/Salaryslip.css'
export default function Salaryslip() {
  const Salary=[{"salaryComp":"Onam Bonus","amount":2000},{"salaryComp":"House Loan","amount":1000},{"salaryComp":"Basic Pay","amount":30000}]
    const pdfRef = useRef(null);

    const handleDownload = () => {
        const content = pdfRef.current;

        const doc = new jsPDF({
          format: 'a3',
          unit: 'px',
          'pagesplit': true,
        });
    
        doc.html(content, {
            callback: function (doc) {
                doc.save('sample.pdf');
            }
        });
    };

    return (
        <div>
            <header  ref={pdfRef}>
                <div class="hidden" style={{width: '640px',height:'550px',backgroundColor:'#D9DFFB',textAlign:'center',dataHtml2canvasIgnore:"false"}}>
                <h5 style={{textAlign:'center'}}>Salary Slip</h5>
                <h6>Name : Liju Thomas</h6>
                <h6>ID : 91</h6>
                <h6>Designation : Manager</h6>
                <h6>Department : HR</h6>
                <br/>
                <table id='salary_table'>
                    <tr>
                        <th>EARNINGS</th>
                        <th>AMOUNT</th>
                        <th>DEDUCTION</th>
                        <th>AMOUNT</th>                                              
                    </tr>
                    <tr>
                        <td>Basic</td>
                        <td>600</td>
                        <td>PF</td>
                        <td>400</td>                                              
                    </tr>
                </table>
                </div>
            </header>
            <footer>
                <button onClick={handleDownload}>Download</button>
            </footer>
        </div>
    );
}