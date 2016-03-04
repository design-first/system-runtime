YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "RuntimeDatabaseCollection",
        "RuntimeError",
        "runtime",
        "runtime-behavior",
        "runtime-component",
        "runtime-db",
        "runtime-helper",
        "runtime-log",
        "runtime-metamodel",
        "runtime-state",
        "runtime-system",
        "runtime-workflow"
    ],
    "modules": [
        "runtime",
        "runtime-behavior",
        "runtime-component",
        "runtime-db",
        "runtime-helper",
        "runtime-log",
        "runtime-metamodel",
        "runtime-state",
        "runtime-system",
        "runtime-workflow"
    ],
    "allModules": [
        {
            "displayName": "runtime",
            "name": "runtime",
            "description": "This module is the main module of Runtime. <br>\nIt inits Runtime metamodel and loads Runtime core system."
        },
        {
            "displayName": "runtime-behavior",
            "name": "runtime-behavior",
            "description": "This module manages the behaviors of all components. \nA behavior is a mecanism that allow users to add actions that will be executed \nwhen a specific state of a component will change."
        },
        {
            "displayName": "runtime-component",
            "name": "runtime-component",
            "description": "This module manages the components. \nIt is the factory of all the components that are created by Runtime."
        },
        {
            "displayName": "runtime-db",
            "name": "runtime-db",
            "description": "This module manages Runtime database. <br>\nRuntime database is a micro NoSQL Database that contains: <br>\n- collections to store documents (schemas, types, components, ...) and <br>\n- APIs to import or export documents. <br>\n\nRuntime Database is closely linked to Runtime metamodel and Runtime components because: <br>\n- all operations done by Runtime database must be compliant with the model before being finished, <br>\n- insert operation automatically creates a component and <br>\n- remove operation automatically destroy a component."
        },
        {
            "displayName": "runtime-helper",
            "name": "runtime-helper",
            "description": "This module contains all the functions used by all the modules."
        },
        {
            "displayName": "runtime-log",
            "name": "runtime-log",
            "description": "This module contains all the functions that write a log."
        },
        {
            "displayName": "runtime-metamodel",
            "name": "runtime-metamodel",
            "description": "This module manages Runtime metamodel. <br>\nRuntime metamodel loads schemas and types, analyzes them and creates the component classes and related RuntimeDatabaseCollections."
        },
        {
            "displayName": "runtime-state",
            "name": "runtime-state",
            "description": "This module manages the states of all thecomponents."
        },
        {
            "displayName": "runtime-system",
            "name": "runtime-system",
            "description": "This module contains Runtime core system."
        },
        {
            "displayName": "runtime-workflow",
            "name": "runtime-workflow",
            "description": "This module manages the workflow of Runtime. It behaves like a workflow engine. <br>\nIt checks if the change of status of a component is valid to be executed. By valid, it means that:<br>\n- the state is valid for the component, <br>\n- the input (i.e. parameters) of all actions for the state are compliants with the model and <br>\n- the output of all actions are compliants with the model. <br>\n\nIf an error occurs, the workflow will call the error state of the component and runtime. <br>\nIf the error can break the consistency of the current system, the worklow will stop."
        }
    ],
    "elements": []
} };
});