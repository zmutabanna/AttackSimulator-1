<!--
  To change this license header, choose License Headers in Project Properties.
  To change this template file, choose Tools | Templates
  and open the template in the editor.
-->

<%@ page contentType="text/html;charset=UTF-8" %>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="layout" content="main" />
        <g:javascript src="threadManage.js"/>
        <title>Thread Management</title>
    </head>
    <body>
        <div id="container">
            <div id="header">
                <img id="logo" src="${request.contextPath}/images/lg_images/logo_high_res.png" width="250" border=0 alt="Support Center" style="padding-top:5px; padding-left: 10px; cursor: pointer;">
                <p><span>TRIAL FEED </span> REQUEST</p>
                <p id="userinfo"><a href="/AttackSimulator/AdminView">Admin View</a>&nbsp;|&nbsp;<a href="/AttackSimulator/logout">Logout</a></p>
            </div>
            <div id="content">
                <div id="index">

                    <h1>Welcome to the Securonix feed generator Thread management page.</h1>


                    <div class="clear"></div>
                </div>
                <div id="Control-panel">
                    
                    <table style="border-style: solid;" align="center" border="1">
                        <tr>
                            <th>Date Start</th>
                            <th>Date Ended</th>
                            <th>OrderId</th>
                            <th>User</th>
                            <th>Frequency</th>
                            <th>Dest. IP</th>
                            <th>Dest. Port</th>
                            <th>Feed</th>
                            <th>Start Service</th>
                            <th>Stop Service</th>
                        </tr>
                        
                            <g:each in="${orders}" status="i" var="order">
                            <tr>
                               <td>
                                  ${order.startdate}
                               </td>
                               <td>
                                  ${order.enddate}
                               </td>
                               <td>
                                  ${order.id}
                               </td>
                               <td>
                                  ${order.userid}
                               </td>
                               <td>
                                  ${order.frequency}
                               </td>
                               <td>
                                  ${order.destinationip}
                               </td>
                               <td>
                                  ${order.destinationport}
                               </td>
                               <td>
                                  ${order.feedtype}
                               </td>
                               <td >
                                   <button id="${order.id}" service-type="startthread">Start Service </button>
                               </td>
                               <td >
                                   <button id="${order.id}" service-type="stopthread">Stop Service </button>
                               </td>
                               <td  id="threadstate${order.id}" style="width: 50px; background-color: ${(order.threadid == -1)?'#FF0000':'#00FF00'}">                     
                               </td>
                            </tr>
                            </g:each>
                    </table>
                    
                    <div id="messages"></div>

                    <div style="clear:both; text-align: center; color: red; text-decoration: bold; font-size: 15px;" id="message"></div> 
                </div>
                <div id="footer">Copyright &copy; Securonix.com. All rights reserved</div>
                <div align="center">
                    <a id="powered_by" href="http://securonix.com"><img src="./images/osticket-securonixonly.gif" width="126" height="23" alt="Powered by osTicket"></a>
                </div>
            </div>
    </body>
</html>