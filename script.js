let delbtn = document.getElementById('delete')
    delbtn.style.display = 'none'
       function saveToLocalStorage(event)
       {
        event.preventDefault()
       
        let arr;
        const object = {
             Expeense : event.target.Expense.value,
             ExpenseD : event.target.ExpenseD.value,
             Category : event.target.Category.value,
            //   age :  event.target.age.value
        }
        const localStorageContent = localStorage.getItem('object')
        
        if(localStorageContent===null)
        {
            arr = []
        }
        else{
            arr = JSON.parse(localStorageContent)
        }
        
        arr.push(object)
        
        
        const stringifiedArr  = JSON.stringify(arr)
        
        localStorage.setItem(object.ExpenseD, stringifiedArr)
        showUserOnScreen(object)
       
     
       }
        function showUserOnScreen(object)
        {
            const parentEle = document.getElementById('listItems')
            const childEle = document.createElement('li')

            childEle.textContent = object.Expense + '-' + object.ExpenseD + '-'+ object.Category
            const delBtn = document.createElement('input')
            delBtn.type = 'button'
            delBtn.value = 'delete'
            delBtn.onclick = () => {
                
                localStorage.removeItem(object.ExpenseD)
                
                parentEle.removeChild(childEle)
            }
            const editBtn  = document.createElement('input')
        editBtn.type = 'button'
        editBtn.value = 'edit'
        editBtn.onclick = () => {
            localStorage.removeItem(object.ExpenseD)
            parentEle.removeChild(childEle)

            document.getElementById('userTag').value = object.Expense
            document.getElementById('phoneTag').value = object.Category
            document.getElementById('emailTag').value = object.ExpenseD
            // document.getElementsByTagName('ageTag').value = object.age
        }
            childEle.appendChild(editBtn)
            childEle.appendChild(delBtn)
            parentEle.appendChild(childEle)

        }