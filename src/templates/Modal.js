const Modal = `
    <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h3>Invoice</h3>
    </div>
    <div class="modal-body" >
        <div class="invoice-rows">

        </div>
        <hr>
    </div>
    <div class="modal-footer">
        <div class="enter-code">
            <input type="text" placeholder="platziMasterCode" id="inserted-code"></input>
            <button type="button" id="enter-code-button">Enter</button>
        </div>
        <div class="total-container">
            <div class="total">
                <p>Total:</p>
                <p class="total-value">$0</p>
            </div>
            <hr>
            <div class="totalByCode">
                <p>Total by Code:</p>
                <p id="totalByCode-value">$0</p>
            </div>
        </div>
      
      
    </div>
  </div>
  `;

export { Modal };
