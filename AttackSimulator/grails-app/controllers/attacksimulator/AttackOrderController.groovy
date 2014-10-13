package attacksimulator

import com.attacksimulator.MySQLDBClass;
import com.attacksimulator.AttackOrders;

class AttackOrderController {
    
    def springSecurityService;
    
    def index() {
        if(springSecurityService.isLoggedIn()){
            //get all the attacks that the user previously ordered.
            //for each fieldset we need to find the number of options that we have for the attacks.
            def secuserid = springSecurityService.currentUser.id;
            def listOfAvailableAttacks = (new MySQLDBClass()).getListofAvailableAttacks(secuserid);
            
            for(Map.Entry<String, ArrayList<AttackOrders>> entry : listOfAvailableAttacks.entrySet()){
                
            }
            
            render(view: '/attackOrder/AttackOrder.gsp', model: [attackorders : listOfAvailableAttacks]);
        }else{
            redirect(controller:"login", action:"auth");
        }
    }
}
