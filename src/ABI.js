const ABI = {
  contractName: "Voting",
  abi: [
    {
      inputs: [],
      name: "get",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "double",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  metadata:
    '{"compiler":{"version":"0.8.13+commit.abaa5c0e"},"language":"Solidity","output":{"abi":[{"inputs":[],"name":"double","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/Voting.sol":"Voting"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/Voting.sol":{"keccak256":"0x8385e46dc8a9796626350ad3860893872c7456cc87b7668fe9ae448ef8ddd3ed","license":"GPL-3.0","urls":["bzz-raw://173ca5e719db1c42301b227ce8f8c5726efca1927e909a743a81d2e452788a11","dweb:/ipfs/QmRBRY38W6H8YtQXCZwc69WWEWTwo2T4kTtCKSBgYomiY5"]}},"version":1}',
  bytecode:
    "0x6080604052600160005534801561001557600080fd5b5061017a806100256000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636d4ce63c1461003b5780638fdb718914610059575b600080fd5b610043610063565b60405161005091906100a0565b60405180910390f35b61006161006c565b005b60008054905090565b600260008082825461007e91906100ea565b92505081905550565b6000819050919050565b61009a81610087565b82525050565b60006020820190506100b56000830184610091565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006100f582610087565b915061010083610087565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610139576101386100bb565b5b82820290509291505056fea2646970667358221220acbc3eabe86419339df57b22f440f818d0fba446a05108e675f7272f8a129b2264736f6c634300080d0033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106100365760003560e01c80636d4ce63c1461003b5780638fdb718914610059575b600080fd5b610043610063565b60405161005091906100a0565b60405180910390f35b61006161006c565b005b60008054905090565b600260008082825461007e91906100ea565b92505081905550565b6000819050919050565b61009a81610087565b82525050565b60006020820190506100b56000830184610091565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006100f582610087565b915061010083610087565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610139576101386100bb565b5b82820290509291505056fea2646970667358221220acbc3eabe86419339df57b22f440f818d0fba446a05108e675f7272f8a129b2264736f6c634300080d0033",
  immutableReferences: {},
  generatedSources: [],
  deployedGeneratedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:979:2",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "52:32:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "62:16:2",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "73:5:2",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "62:7:2",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "34:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "44:7:2",
                type: "",
              },
            ],
            src: "7:77:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "155:53:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "172:3:2",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "195:5:2",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "177:17:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "177:24:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "165:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "165:37:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "165:37:2",
                },
              ],
            },
            name: "abi_encode_t_uint256_to_t_uint256_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "143:5:2",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "150:3:2",
                type: "",
              },
            ],
            src: "90:118:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "312:124:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "322:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "334:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "345:2:2",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "330:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "330:18:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "322:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "402:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "415:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "426:1:2",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "411:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "411:17:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "358:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "358:71:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "358:71:2",
                },
              ],
            },
            name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "284:9:2",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "296:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "307:4:2",
                type: "",
              },
            ],
            src: "214:222:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "470:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "487:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "490:77:2",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "480:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "480:88:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "480:88:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "584:1:2",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "587:4:2",
                        type: "",
                        value: "0x11",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "577:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "577:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "577:15:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "608:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "611:4:2",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "601:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "601:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "601:15:2",
                },
              ],
            },
            name: "panic_error_0x11",
            nodeType: "YulFunctionDefinition",
            src: "442:180:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "676:300:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "686:25:2",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "709:1:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "691:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "691:20:2",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "686:1:2",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "720:25:2",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "743:1:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "725:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "725:20:2",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "720:1:2",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "918:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "920:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "920:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "920:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "x",
                                nodeType: "YulIdentifier",
                                src: "830:1:2",
                              },
                            ],
                            functionName: {
                              name: "iszero",
                              nodeType: "YulIdentifier",
                              src: "823:6:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "823:9:2",
                          },
                        ],
                        functionName: {
                          name: "iszero",
                          nodeType: "YulIdentifier",
                          src: "816:6:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "816:17:2",
                      },
                      {
                        arguments: [
                          {
                            name: "y",
                            nodeType: "YulIdentifier",
                            src: "838:1:2",
                          },
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "845:66:2",
                                type: "",
                                value:
                                  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                              },
                              {
                                name: "x",
                                nodeType: "YulIdentifier",
                                src: "913:1:2",
                              },
                            ],
                            functionName: {
                              name: "div",
                              nodeType: "YulIdentifier",
                              src: "841:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "841:74:2",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "835:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "835:81:2",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "812:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "812:105:2",
                  },
                  nodeType: "YulIf",
                  src: "809:131:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "950:20:2",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "965:1:2",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "968:1:2",
                      },
                    ],
                    functionName: {
                      name: "mul",
                      nodeType: "YulIdentifier",
                      src: "961:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "961:9:2",
                  },
                  variableNames: [
                    {
                      name: "product",
                      nodeType: "YulIdentifier",
                      src: "950:7:2",
                    },
                  ],
                },
              ],
            },
            name: "checked_mul_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "659:1:2",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "662:1:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "product",
                nodeType: "YulTypedName",
                src: "668:7:2",
                type: "",
              },
            ],
            src: "628:348:2",
          },
        ],
      },
      contents:
        "{\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n}\n",
      id: 2,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  sourceMap: "72:184:1:-:0;;;109:1;95:15;;72:184;;;;;;;;;;;;;;;;",
  deployedSourceMap:
    "72:184:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;119:74;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;201:52;;;:::i;:::-;;119:74;155:7;182:3;;175:10;;119:74;:::o;201:52::-;244:1;237:3;;:8;;;;;;;:::i;:::-;;;;;;;;201:52::o;7:77:2:-;44:7;73:5;62:16;;7:77;;;:::o;90:118::-;177:24;195:5;177:24;:::i;:::-;172:3;165:37;90:118;;:::o;214:222::-;307:4;345:2;334:9;330:18;322:26;;358:71;426:1;415:9;411:17;402:6;358:71;:::i;:::-;214:222;;;;:::o;442:180::-;490:77;487:1;480:88;587:4;584:1;577:15;611:4;608:1;601:15;628:348;668:7;691:20;709:1;691:20;:::i;:::-;686:25;;725:20;743:1;725:20;:::i;:::-;720:25;;913:1;845:66;841:74;838:1;835:81;830:1;823:9;816:17;812:105;809:131;;;920:18;;:::i;:::-;809:131;968:1;965;961:9;950:20;;628:348;;;;:::o",
  source:
    "// SPDX-License-Identifier: GPL-3.0\r\npragma solidity >=0.7.0 <0.9.0;\r\n\r\ncontract Voting {\r\n    uint256 val = 1;\r\n\r\n    function get() public view returns (uint256) {\r\n        return val;\r\n    }\r\n\r\n    function double() public {\r\n        val *= 2;\r\n    }\r\n}\r\n",
  sourcePath:
    "D:\\cursuri n stuff\\Anul III - Sem II\\Blockchain\\voting-system\\contracts\\Voting.sol",
  ast: {
    absolutePath: "project:/contracts/Voting.sol",
    exportedSymbols: {
      Voting: [54],
    },
    id: 55,
    license: "GPL-3.0",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 34,
        literals: ["solidity", ">=", "0.7", ".0", "<", "0.9", ".0"],
        nodeType: "PragmaDirective",
        src: "37:31:1",
      },
      {
        abstract: false,
        baseContracts: [],
        canonicalName: "Voting",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 54,
        linearizedBaseContracts: [54],
        name: "Voting",
        nameLocation: "81:6:1",
        nodeType: "ContractDefinition",
        nodes: [
          {
            constant: false,
            id: 37,
            mutability: "mutable",
            name: "val",
            nameLocation: "103:3:1",
            nodeType: "VariableDeclaration",
            scope: 54,
            src: "95:15:1",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256",
            },
            typeName: {
              id: 35,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "95:7:1",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
            value: {
              hexValue: "31",
              id: 36,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "number",
              lValueRequested: false,
              nodeType: "Literal",
              src: "109:1:1",
              typeDescriptions: {
                typeIdentifier: "t_rational_1_by_1",
                typeString: "int_const 1",
              },
              value: "1",
            },
            visibility: "internal",
          },
          {
            body: {
              id: 44,
              nodeType: "Block",
              src: "164:29:1",
              statements: [
                {
                  expression: {
                    id: 42,
                    name: "val",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 37,
                    src: "182:3:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 41,
                  id: 43,
                  nodeType: "Return",
                  src: "175:10:1",
                },
              ],
            },
            functionSelector: "6d4ce63c",
            id: 45,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "get",
            nameLocation: "128:3:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 38,
              nodeType: "ParameterList",
              parameters: [],
              src: "131:2:1",
            },
            returnParameters: {
              id: 41,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 40,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 45,
                  src: "155:7:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 39,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "155:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "154:9:1",
            },
            scope: 54,
            src: "119:74:1",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 52,
              nodeType: "Block",
              src: "226:27:1",
              statements: [
                {
                  expression: {
                    id: 50,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48,
                      name: "val",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 37,
                      src: "237:3:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "*=",
                    rightHandSide: {
                      hexValue: "32",
                      id: 49,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "244:1:1",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_2_by_1",
                        typeString: "int_const 2",
                      },
                      value: "2",
                    },
                    src: "237:8:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 51,
                  nodeType: "ExpressionStatement",
                  src: "237:8:1",
                },
              ],
            },
            functionSelector: "8fdb7189",
            id: 53,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "double",
            nameLocation: "210:6:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 46,
              nodeType: "ParameterList",
              parameters: [],
              src: "216:2:1",
            },
            returnParameters: {
              id: 47,
              nodeType: "ParameterList",
              parameters: [],
              src: "226:0:1",
            },
            scope: 54,
            src: "201:52:1",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
        ],
        scope: 55,
        src: "72:184:1",
        usedErrors: [],
      },
    ],
    src: "37:221:1",
  },
  legacyAST: {
    absolutePath: "project:/contracts/Voting.sol",
    exportedSymbols: {
      Voting: [54],
    },
    id: 55,
    license: "GPL-3.0",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 34,
        literals: ["solidity", ">=", "0.7", ".0", "<", "0.9", ".0"],
        nodeType: "PragmaDirective",
        src: "37:31:1",
      },
      {
        abstract: false,
        baseContracts: [],
        canonicalName: "Voting",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 54,
        linearizedBaseContracts: [54],
        name: "Voting",
        nameLocation: "81:6:1",
        nodeType: "ContractDefinition",
        nodes: [
          {
            constant: false,
            id: 37,
            mutability: "mutable",
            name: "val",
            nameLocation: "103:3:1",
            nodeType: "VariableDeclaration",
            scope: 54,
            src: "95:15:1",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256",
            },
            typeName: {
              id: 35,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "95:7:1",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
            value: {
              hexValue: "31",
              id: 36,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "number",
              lValueRequested: false,
              nodeType: "Literal",
              src: "109:1:1",
              typeDescriptions: {
                typeIdentifier: "t_rational_1_by_1",
                typeString: "int_const 1",
              },
              value: "1",
            },
            visibility: "internal",
          },
          {
            body: {
              id: 44,
              nodeType: "Block",
              src: "164:29:1",
              statements: [
                {
                  expression: {
                    id: 42,
                    name: "val",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 37,
                    src: "182:3:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 41,
                  id: 43,
                  nodeType: "Return",
                  src: "175:10:1",
                },
              ],
            },
            functionSelector: "6d4ce63c",
            id: 45,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "get",
            nameLocation: "128:3:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 38,
              nodeType: "ParameterList",
              parameters: [],
              src: "131:2:1",
            },
            returnParameters: {
              id: 41,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 40,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 45,
                  src: "155:7:1",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 39,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "155:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "154:9:1",
            },
            scope: 54,
            src: "119:74:1",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 52,
              nodeType: "Block",
              src: "226:27:1",
              statements: [
                {
                  expression: {
                    id: 50,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48,
                      name: "val",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 37,
                      src: "237:3:1",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "*=",
                    rightHandSide: {
                      hexValue: "32",
                      id: 49,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "244:1:1",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_2_by_1",
                        typeString: "int_const 2",
                      },
                      value: "2",
                    },
                    src: "237:8:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 51,
                  nodeType: "ExpressionStatement",
                  src: "237:8:1",
                },
              ],
            },
            functionSelector: "8fdb7189",
            id: 53,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "double",
            nameLocation: "210:6:1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 46,
              nodeType: "ParameterList",
              parameters: [],
              src: "216:2:1",
            },
            returnParameters: {
              id: 47,
              nodeType: "ParameterList",
              parameters: [],
              src: "226:0:1",
            },
            scope: 54,
            src: "201:52:1",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
        ],
        scope: 55,
        src: "72:184:1",
        usedErrors: [],
      },
    ],
    src: "37:221:1",
  },
  compiler: {
    name: "solc",
    version: "0.8.13+commit.abaa5c0e.Emscripten.clang",
  },
  networks: {
    5777: {
      events: {},
      links: {},
      address: "0x58792f484d6f6D5976180A168694aCbb4bB20065",
      transactionHash:
        "0x4bc5283ad4c7a05c3cf49b91dccfcf20995b158f0a554b3c0dbbe3fe1d7b42e0",
    },
  },
  schemaVersion: "3.4.6",
  updatedAt: "2022-04-02T20:15:59.581Z",
  devdoc: {
    kind: "dev",
    methods: {},
    version: 1,
  },
  userdoc: {
    kind: "user",
    methods: {},
    version: 1,
  },
};

export default ABI;
