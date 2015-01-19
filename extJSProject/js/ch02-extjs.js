/**
 * Created by Darek on 2015-01-19.
 */
Ext.onReady(function(){

    Ext.define('Examples.ux.LabeledSpinner', {
        extend : 'Ext.form.field.Spinner',
        alias : 'widget.labeledspinner',
        onSpinUp : function() {
            this.setValue(++this.value);
        },
        onSpinDown : function() {
            this.setValue(--this.value);
        }
    });
    Ext.create('widget.labeledspinner',{
        renderTo:Ext.getBody()

    });




});