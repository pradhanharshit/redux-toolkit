* pehle store folder m slice bnalo
* fir store folder m application store bnalo
* iske logics sb comments m likhe hue h 
* ye sb krne ke bd ab 
* redux logic aur components bnane ke bd ab
* ab unhe aaps m communicate krvna pdhega 
* kse hmari application ke components uss store m se states ko use aur update krenge 
* jiske liye an react-redux use hogi 
* bindings ke liye dispatch vispatch krenge 

# To do that we have to Configure the store to the root your root component now react-redux binding will come into picture

* ab state flow krne ke liye pure application m jisse components ko pta chl jye store aur states ke baare m hm 
* provider m puri application wrap krenge 
* uske bd useDispatch action create krne ke liye aur useSelector to access the state from components

# Ab ek aur main cheez krni hai jo api call krke data fetch ho rha h Product.js se use bhi redux m hi krenge 
* redux deals with the syncronous behaviour redux can't deal with async operations
* to handle async logic in redux we use middleware
* ab hm dekhenge kse middleware use krke api call krenge 
* uske liye hme ek aur slice bnani pdhegi 
