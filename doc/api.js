YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "SyrupDatabaseCollection",
        "SyrupError",
        "syrup",
        "syrup-behavior",
        "syrup-component",
        "syrup-db",
        "syrup-helper",
        "syrup-log",
        "syrup-metamodel",
        "syrup-state",
        "syrup-system",
        "syrup-workflow"
    ],
    "modules": [
        "syrup",
        "syrup-behavior",
        "syrup-component",
        "syrup-db",
        "syrup-helper",
        "syrup-log",
        "syrup-metamodel",
        "syrup-state",
        "syrup-system",
        "syrup-workflow"
    ],
    "allModules": [
        {
            "displayName": "syrup",
            "name": "syrup",
            "description": "This module is the main module of syrup. <br>\nIt inits syrup metamodel and loads syrup core system."
        },
        {
            "displayName": "syrup-behavior",
            "name": "syrup-behavior",
            "description": "This module manages the behaviors of all components. \nA behavior is a mecanism that allow users to add actions that will be executed \nwhen a specific state of a component will change."
        },
        {
            "displayName": "syrup-component",
            "name": "syrup-component",
            "description": "This module manages the components. \nIt is the factory of all the components that are created by syrup."
        },
        {
            "displayName": "syrup-db",
            "name": "syrup-db",
            "description": "This module manages syrup database. <br>\nsyrup database is a micro NoSQL Database that contains: <br>\n- collections to store documents (schemas, types, components, ...) and <br>\n- APIs to import or export documents. <br>\n\nsyrup Database is closely linked to syrup metamodel and syrup components because: <br>\n- all operations done by syrup database must be compliant with the model before being finished, <br>\n- insert operation automatically creates a component and <br>\n- remove operation automatically destroy a component."
        },
        {
            "displayName": "syrup-helper",
            "name": "syrup-helper",
            "description": "This module contains all the functions used by all the modules."
        },
        {
            "displayName": "syrup-log",
            "name": "syrup-log",
            "description": "This module contains all the functions that write a log."
        },
        {
            "displayName": "syrup-metamodel",
            "name": "syrup-metamodel",
            "description": "This module manages syrup metamodel. <br>\nsyrup metamodel loads schemas and types, analyzes them and creates the component classes and related SyrupDatabaseCollections."
        },
        {
            "displayName": "syrup-state",
            "name": "syrup-state",
            "description": "This module manages the states of all thecomponents."
        },
        {
            "displayName": "syrup-system",
            "name": "syrup-system",
            "description": "This module contains syrup core system."
        },
        {
            "displayName": "syrup-workflow",
            "name": "syrup-workflow",
            "description": "This module manages the workflow of syrup. It behaves like a workflow engine. <br>\nIt checks if the change of status of a component is valid to be executed. By valid, it means that:<br>\n- the state is valid for the component, <br>\n- the input (i.e. parameters) of all actions for the state are compliants with the model and <br>\n- the output of all actions are compliants with the model. <br>\n\nIf an error occurs, the workflow will call the error state of the component and syrup. <br>\nIf the error can break the consistency of the current system, the worklow will stop."
        }
    ],
    "elements": []
} };
});