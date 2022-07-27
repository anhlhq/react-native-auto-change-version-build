# react-native-auto-change-version-build

## Before build

- Android: yarn react-native-auto-change-version-build-android
- iOS: yarn react-native-auto-change-version-build-ios
- All: yarn react-native-auto-change-version-build

## Recommend

For android:

- Add to package.json script:
  ` "scripts": { ... "build-apk": "react-native-auto-change-version-build-android && cd android && ./gradlew assembleRelease", ... }`

For ios:
Add to ${ProjectName}.xcscheme before `<BuildActionEntries>` tag

-      <PreActions>
         <ExecutionAction
            ActionType = "Xcode.IDEStandardExecutionActionsCore.ExecutionActionType.ShellScriptAction">
            <ActionContent
               title = "Run Script"
               scriptText = "# Type a script or drag a script file from your workspace to insert its path.&#10;cd $PROJECT_DIR&#10;cd ../&#10;yarn react-native-auto-change-version-build-ios&#10;">
               <EnvironmentBuildable>
                  <BuildableReference
                     BuildableIdentifier = "primary"
                     BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
                     BuildableName = "${ProjectName}.app"
                     BlueprintName = "${ProjectName}"
                     ReferencedContainer = "container:${ProjectName}.xcodeproj">
                  </BuildableReference>
               </EnvironmentBuildable>
            </ActionContent>
         </ExecutionAction>
      </PreActions>
