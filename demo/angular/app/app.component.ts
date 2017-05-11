import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="{{ 'app.name' | L }}"></ActionBar>
    <ScrollView>
      <StackLayout>
        <Label text="{{ 'hello.world' | L }}"></Label>
        <Label text="{{ 'sprintf' | L }}"></Label>
        <Label text="{{ 'sprintf' | L:'PARTIALLY' }}"></Label>
        <Label text="{{ 'sprintf' | L:'AGAIN':'OK' }}"></Label>
        <Label text="{{ 'array' | L }}"></Label>
        <Label text="{{ 'this.key.does.not.exist' | L }}"></Label>
        <Label text="{{ 'html' | L }}"></Label>
        <Label text="{{ 'new.line' | L }}"></Label>
        <Label text="{{ 'new.line' | L }}" textWrap="true"></Label>
        <Label text="{{ 'tab' | L }}" textWrap="true"></Label>
        <Label text="{{ 'special.characters.n' | L }}" textWrap="true"></Label>
        <Label text="{{ 'special.characters.r' | L }}" textWrap="true"></Label>
        <Label text="{{ 'special.characters.t' | L }}" textWrap="true"></Label>
        <Label text="{{ 'special.characters.backslash' | L }}" textWrap="true"></Label>
        <Label text="{{ 'special.characters.single.quote' | L }}" textWrap="true"></Label>
        <Label text="{{ 'special.characters.double.quote' | L }}" textWrap="true"></Label>
        <Label text="{{ 'special.keys.\n' | L }}" textWrap="true"></Label>
        <Label text="{{ 'special.keys.\r' | L }}" textWrap="true"></Label>
        <Label text="{{ 'special.keys.\t' | L }}" textWrap="true"></Label>
        <Label text="{{ 'special.keys.\\\\' | L }}" textWrap="true"></Label>
        <Label text="{{ 'special.keys.\\'' | L }}" textWrap="true"></Label>
        <Label text="{{ 'special.keys.&quot;' | L }}" textWrap="true"></Label>
      </StackLayout>
    </ScrollView>
  `
})
export class AppComponent {
}
