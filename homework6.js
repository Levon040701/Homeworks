// Array To Tree
function depthFirstSearch1(arr, root=null) {
    if (root === null) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].parent === null) {
                root = {'id': arr[i].id, 'children': null};
                break;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].parent === root.id) {
            let childId = arr[i].id;
            let child = {'id': childId, 'children': null};
            if (root.children === null) {
                root.children = child;
            } else {
                if ( !Array.isArray(root.children) ) {
                    root.children = [root.children];
                }
                root.children.push(child);
            }
            depthFirstSearch1(arr, child);
        }
    }
            
    return root;
}

function depthFirstSearch2(arr, root=null, rootId=null) {
    if (root === null) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].parent === null) {
                rootId = arr[i].id;
                root = {[rootId]: null};
                break;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].parent === rootId) {
            let childId = arr[i].id;
            let child = {[childId]: null};
            if (root[rootId] === null) {
                root[rootId] = child;
            } else {
                root[rootId][childId] = null;
            }
    
            depthFirstSearch2(arr, root[rootId], childId);
        }
    }
            
    return root;
}

function breadthFirstSearch1(arr, level=null, root=null) {
    if (level === null) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].parent === null) {
                root = {'id': arr[i].id, 'children': null};
                level = [root];
                break;
            }
        }
    }

    if (level.length === 0) {
        return;
    }

    let nextLevel = [];
    let child;
    for (let i = 0; i < level.length; i++) {
        let parentNode = level[i];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].parent === parentNode.id) {
                child = {'id': arr[j].id, 'children': null};
                nextLevel.push(child);
                if (parentNode.children === null) {
                    parentNode.children = child;
                } else {
                    if ( !Array.isArray(parentNode.children) ) {
                        parentNode.children = [parentNode.children];
                    }
                    parentNode.children.push(child);
                }
            }
        }
    }
    breadthFirstSearch1(arr, nextLevel, child);
            
    return root;
}

function breadthFirstSearch2(arr, level=null, root=null) {
    if (level === null) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].parent === null) {
                root = {[arr[i].id]: {}};
                level = [root];
                break;
            }
        }
    }

    if (level.length === 0) {
        return;
    }

    let nextLevel = [];
    for (let i = 0; i < level.length; i++) {
        for (const key in level[i]) {
            let parentNode = level[i][key];
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].parent === +(key)) {
                    let childId = arr[j].id;
                    parentNode[childId] = {};
                }
            }
            
            nextLevel.push(parentNode);
        }
    }
    breadthFirstSearch2(arr, nextLevel, root);
            
    return root;
}

let treeLike = [{id: 1, parentId: null}, {id: 2, parentId: 1}, {id: 3, parentId: 1}, {id: 4, parentId: 2}, {id: 5, parentId: 2}, {id: 6, parentId: 3}, {id: 7, parentId: 4}, {id: 8, parentId: 7}, {id: 9, parentId: 8}];
console.log( depthFirstSearch1(treeLike) );
console.log( depthFirstSearch2(treeLike) );
console.log( breadthFirstSearch1(treeLike) );
console.log( breadthFirstSearch2(treeLike) );

