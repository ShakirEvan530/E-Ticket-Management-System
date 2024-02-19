function discount(){
    const couponValue = document.getElementById('MyCouponApply').value;
    if(couponValue==='NEW15'){
        document.getElementById('totalGrandCost').innerText = 1870;
        document.getElementById('buttonHide').classList.add('hidden');
    }
    else if(couponValue ==='Couple 20'){
        document.getElementById('totalGrandCost').innerText = 1760;
        document.getElementById('buttonHide').classList.add('hidden');
    }
    else
    {
        alert ('Can Not Apply This Coupon');
    }
}