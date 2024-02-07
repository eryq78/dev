"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1536],{6525:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var i=n(5893),t=n(1151);const r=n.p+"assets/images/users-1bfeb348c4e36eec0e9abc6afb895726.png",o=n.p+"assets/images/create-user-fd829a8c2b0077dcb9e3f8f05562693f.png",a=n.p+"assets/images/roles-bc56160999ed0722c5ea6c887f76badd.png",l=n.p+"assets/images/create-role-3c1b523fc0c4d8468e7e550b4bc73cf8.png",c={title:"Users and Roles",sidebar_position:12},d=void 0,h={id:"users-and-roles",title:"Users and Roles",description:"SaaSykit provides a simple user and role management system, that allows you to give granular access to your application to your team members.",source:"@site/docs/users-and-roles.md",sourceDirName:".",slug:"/users-and-roles",permalink:"/docs/users-and-roles",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Users and Roles",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/authentication"},next:{title:"Admin Panel",permalink:"/docs/admin-panel"}},u={},p=[{value:"Users",id:"users",level:2},{value:"Creating a User",id:"creating-a-user",level:3},{value:"Roles",id:"roles",level:2},{value:"Creating a Role / Editing a Role",id:"creating-a-role--editing-a-role",level:3},{value:"Creating more permissions",id:"creating-more-permissions",level:3}];function m(e){const s={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"SaaSykit"})," provides a simple user and role management system, that allows you to give granular access to your application to your team members."]}),"\n",(0,i.jsx)(s.h2,{id:"users",children:"Users"}),"\n",(0,i.jsx)(s.p,{children:'To access the user management system, using an admin account, under "User Management", click on the "Users" link in the sidebar.'}),"\n",(0,i.jsx)("img",{src:r,alt:"Users",class:"image"}),"\n",(0,i.jsx)(s.p,{children:"A user can be both a team member of yours and/or a customer of your application."}),"\n",(0,i.jsxs)(s.p,{children:['Each user has a "dashboard" where they can see their subscriptions, billings, edit their profile, etc. This dashboard is accessible at ',(0,i.jsx)(s.code,{children:"/dashboard"})," route."]}),"\n",(0,i.jsxs)(s.p,{children:["If the user is an admin, they can also access the admin dashboard at ",(0,i.jsx)(s.code,{children:"/admin"})," route, where they can manage the application depending on the roles they have."]}),"\n",(0,i.jsx)(s.h3,{id:"creating-a-user",children:"Creating a User"}),"\n",(0,i.jsx)(s.p,{children:'To create a user, click on the "New User" button on the top right corner of the page.'}),"\n",(0,i.jsx)(s.p,{children:"You will be presented with a form to fill in the user details."}),"\n",(0,i.jsx)("img",{src:o,alt:"Create User",class:"image"}),"\n",(0,i.jsx)(s.p,{children:"You can enter the following details about your new user:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Name"}),": The name of the user."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Public name"}),": The public name of the user. This is the name that will be displayed on blog pages in case the user is a blog author."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Email"}),": The email of the user. This will be used to login to the application."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Password"}),": The password of the user. This will be used to login to the application."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Roles"}),": The roles of the user. A user can have multiple roles. The roles will determine what the user can do in the application."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Is Admin"}),": Whether the user is an admin or not. If the user is an admin, they will be able to access the admin dashboard at ",(0,i.jsx)(s.code,{children:"/admin"})," route."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Is Blocked"}),": Whether the user is blocked or not. If the user is blocked, they will not be able to login to the application."]}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsx)(s.p,{children:'You need to check the "Is Admin" checkbox if you want the user to be able to access the admin dashboard, and then select the roles that you want the user to have.'}),(0,i.jsx)(s.p,{children:'It\'s not enough to just select the roles, you also need to check the "Is Admin" checkbox.'})]}),"\n",(0,i.jsx)(s.p,{children:'You can easily edit a user by clicking on the "Edit" button on the right side of the user row and you will be presented with the same form that you used to create the user.'}),"\n",(0,i.jsx)(s.h2,{id:"roles",children:"Roles"}),"\n",(0,i.jsx)(s.p,{children:'To access the role management system, using an admin account, under "User Management", click on the "Roles" link in the sidebar.'}),"\n",(0,i.jsx)("img",{src:a,alt:"Users",class:"image"}),"\n",(0,i.jsx)(s.p,{children:"A role is a set of permissions that you can assign to a user. A user can have multiple roles."}),"\n",(0,i.jsx)(s.h3,{id:"creating-a-role--editing-a-role",children:"Creating a Role / Editing a Role"}),"\n",(0,i.jsx)(s.p,{children:'To create a role, click on the "New Role" button on the top right corner of the page.'}),"\n",(0,i.jsx)(s.p,{children:'To edit a role, click on the "Edit" button on the right side of the role row.'}),"\n",(0,i.jsx)(s.p,{children:"You will be presented with a form to fill in the role details."}),"\n",(0,i.jsx)("img",{src:l,alt:"Create User",class:"image"}),"\n",(0,i.jsx)(s.p,{children:"You can enter the following details about your new role:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Name"}),": The name of the role."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Permissions"}),": The permissions of the role. A role can have multiple permissions. The permissions will determine what the user can do in the application."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Permissions are human readable and self explanatory, for each part of the application there is typically a ",(0,i.jsx)(s.code,{children:"create"}),", ",(0,i.jsx)(s.code,{children:"view"}),", ",(0,i.jsx)(s.code,{children:"update"})," and ",(0,i.jsx)(s.code,{children:"delete"})," permission."]}),"\n",(0,i.jsxs)(s.p,{children:["For example, for the ",(0,i.jsx)(s.code,{children:"users"})," part of the application, there are the following permissions:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"create users"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"view users"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"update users"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"delete users"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["The same goes with ",(0,i.jsx)(s.code,{children:"roles"}),", ",(0,i.jsx)(s.code,{children:"products"}),", ",(0,i.jsx)(s.code,{children:"plans"}),", ",(0,i.jsx)(s.code,{children:"discounts"}),", ",(0,i.jsx)(s.code,{children:"settings"}),", ",(0,i.jsx)(s.code,{children:"blog"}),", ",(0,i.jsx)(s.code,{children:"transactions"}),", ",(0,i.jsx)(s.code,{children:"subscriptions"}),", etc."]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Saasykit"})," comes with many permissions out of the box that allow you to give granular access to your application to your team members covering all of the use cases and parts of your application."]})}),"\n",(0,i.jsx)(s.h3,{id:"creating-more-permissions",children:"Creating more permissions"}),"\n",(0,i.jsxs)(s.p,{children:["If you want to create more permissions, you can do so by editing the ",(0,i.jsx)(s.code,{children:"database/seeders/RolesAndPermissionsSeeder.php"})," file."]}),"\n",(0,i.jsx)(s.p,{children:"Once done, you will need to run the following command to seed the new permissions:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"php artisan db:seed --class=DatabaseSeeder\n"})}),"\n",(0,i.jsx)(s.p,{children:"This command is already part of the deployment process, so you don't need to worry about it when deploying your application."})]})}function x(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var i=n(7294);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);