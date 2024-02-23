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

// function breadthFirstSearch2(arr, root=null, level=null, parentIdsArr=null) {
//     if (level === null) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].parent === null) {
//                 parentIdsArr = [arr[i].id];
//                 root = {[parentIdsArr[0]]: {}};
//                 level = [root];
//                 break;
//             }
//         }
//     }

//     if (level.length === 0) {
//         return;
//     }

//     let nextLevel = [];
//     let childrenIdsArr = [];
//     for (let i = 0; i < level.length; i++) {
//         let parentNode = level[i];
//         let parentId = parentIdsArr[i];
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j].parent === +(parentId)) {
//                 let childId = arr[j].id;
//                 let child = {[childId]: {}};
//                 nextLevel.push(child);
//                 childrenIdsArr.push(childId);
//                 parentNode[parentId] = child;
//             }
//         }
//     }
//     breadthFirstSearch2(arr, root, nextLevel, childrenIdsArr);
            
//     return root;
// }

let treeLike = [{parent: 1, id: 2}, {parent: null, id: 1}, {parent: 3, id: 4}, {parent: 1, id: 3}, {parent: 4, id: 5}, {parent: 2, id: 6}];
console.log( breadthFirstSearch1(treeLike) );

