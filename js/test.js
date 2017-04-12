var mydata = [
    { "end_time": 1418297439000, "start_time": 1418297107000, "owner": "tyanai", "session_status": "completed", "name": "vm_basic_scopes.tyanai.14_12_11_13_25_04_2627" },
    { "end_time": 1418303972000, "start_time": 1418303603000, "owner": "tyanai", "session_status": "completed", "name": "vm_basic_scopes.tyanai.14_12_11_15_13_22_1257" },
    { "end_time": 1418304098000, "start_time": 1418303706000, "owner": "tyanai", "session_status": "completed", "name": "vm_basic_scopes.tyanai.14_12_11_15_15_03_0556" },
    { "end_time": 1418304242000, "start_time": 1418303826000, "owner": "tyanai", "session_status": "completed", "name": "vm_basic_scopes.tyanai.14_12_11_15_17_03_6085" },
    { "end_time": 1418304376000, "start_time": 1418303947000, "owner": "tyanai", "session_status": "completed", "name": "vm_basic_scopes.tyanai.14_12_11_15_19_04_2074" },
    { "end_time": 1418304505000, "start_time": 1418304068000, "owner": "tyanai", "session_status": "completed", "name": "vm_basic_scopes.tyanai.14_12_11_15_21_04_7532" },
    { "end_time": 1418304658000, "start_time": 1418304188000, "owner": "tyanai", "session_status": "completed", "name": "vm_basic_scopes.tyanai.14_12_11_15_23_04_4210" },
    { "end_time": 1418304802000, "start_time": 1418304308000, "owner": "tyanai", "session_status": "completed", "name": "vm_basic_scopes.tyanai.14_12_11_15_25_04_1308" },
    { "end_time": 1418304916000, "start_time": 1418304429000, "owner": "tyanai", "session_status": "completed", "name": "vm_basic_scopes.tyanai.14_12_11_15_27_05_2572" },
    { "end_time": 1418305023000, "start_time": 1418304548000, "owner": "tyanai", "session_status": "completed", "name": "vm_basic_scopes.tyanai.14_12_11_15_29_04_3923" }
];


$(document).ready(function() {
    $("#jqGrid").jqGrid({
        datatype: "local",
        data: mydata,
        height: 250,
        width: 780,
        page: 1,
        colModel: [
            { "name": "post_session_script", "label": "Post Session Script", "width": 150, "hidden": true, "index": "post_session_script", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, 
            { "name": "abort_dependent_jobs_on_nonzero_exit", "label": "Abort Dependent Jobs On Nonzero Exit", "width": 150, "hidden": true, "index": "abort_dependent_jobs_on_nonzero_exit", "editable": true, "edittype": "select", "stype": "select", "searchoptions": { "value": ":[All];MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;FALSE:FALSE;TRUE:TRUE" }, "editoptions": { "value": ":[All];MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;FALSE:FALSE;TRUE:TRUE" }, "searchrules": {} }, 
            { "name": "session_dir", "label": "Session Dir", "width": 150, "hidden": true, "index": "session_dir", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "output_mode", "label": "Output Mode", "width": 150, "hidden": true, "index": "output_mode", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} },
            { "name": "original_session_dir", "label": "Original Session Dir", "width": 150, "hidden": true, "index": "original_session_dir", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, 
            { "name": "pre_session_log_file", "label": "Pre Session Log File", "width": 150, "hidden": true, "index": "pre_session_log_file", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "PseudoConfigurableAttributeDescriptorother_runs_latest", "label": "#Other", "width": 150, "hidden": true, "index": "PseudoConfigurableAttributeDescriptorother_runs_latest", "editable": true, "searchoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "editoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "searchrules": { "integer": true } }, 
            { "name": "pre_commands", "label": "Pre Commands", "width": 150, "hidden": true, "index": "pre_commands", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "description", "label": "Description", "width": 150, "hidden": true, "index": "description", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} },
            { "name": "max_runs_in_parallel", "label": "Max Runs In Parallel", "width": 150, "hidden": true, "index": "max_runs_in_parallel", "editable": true, "searchoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "editoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "searchrules": { "integer": true } }, { "name": "bundling_policy", "label": "Bundling Policy", "width": 150, "hidden": true, "index": "bundling_policy", "editable": true, "edittype": "select", "stype": "select", "searchoptions": { "value": ":[All];MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;GROUP_BASED:GROUP_BASED;USER_DEFINED:USER_DEFINED;DISABLED:DISABLED" }, "editoptions": { "value": ":[All];MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;GROUP_BASED:GROUP_BASED;USER_DEFINED:USER_DEFINED;DISABLED:DISABLED" }, "searchrules": {} }, 
            { "name": "pre_session_drm", "label": "Pre Session Drm", "width": 150, "hidden": true, "index": "pre_session_drm", "editable": true, "edittype": "select", "stype": "select", "searchoptions": { "value": ":[All];PARALLEL_LOCAL:PARALLEL_LOCAL;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;SGE:SGE;SERIAL_LOCAL:SERIAL_LOCAL;LOADLEVELER:LOADLEVELER;LSF:LSF;USER_DEFINED:USER_DEFINED" }, "editoptions": { "value": ":[All];PARALLEL_LOCAL:PARALLEL_LOCAL;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;SGE:SGE;SERIAL_LOCAL:SERIAL_LOCAL;LOADLEVELER:LOADLEVELER;LSF:LSF;USER_DEFINED:USER_DEFINED" }, "searchrules": {} }, { "name": "session_status", "label": "Session Status", "width": 150, "hidden": false, "index": "session_status", "editable": true, "edittype": "select", "stype": "select", "searchoptions": { "value": ":[All];inaccessible:inaccessible;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;pre_session_script:pre_session_script;post_session_script:post_session_script;post_session_script_done:post_session_script_done;stopped:stopped;in_progress:in_progress;done:done;failed:failed;pre_session_script_done:pre_session_script_done;deleted:deleted;completed:completed" }, "editoptions": { "value": ":[All];inaccessible:inaccessible;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;pre_session_script:pre_session_script;post_session_script:post_session_script;post_session_script_done:post_session_script_done;stopped:stopped;in_progress:in_progress;done:done;failed:failed;pre_session_script_done:pre_session_script_done;deleted:deleted;completed:completed" }, "searchrules": {} }, { "name": "PseudoConfigurableAttributeDescriptorwaiting_latest", "label": "#Waiting", "width": 150, "hidden": true, "index": "PseudoConfigurableAttributeDescriptorwaiting_latest", "editable": true, "searchoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "editoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "searchrules": { "integer": true } }, { "name": "editing", "label": "Editing", "width": 150, "hidden": true, "index": "editing", "editable": true, "edittype": "select", "stype": "select", "searchoptions": { "value": ":[All];MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;Severe:Severe;Descendants:Descendants;Light:Light;None:None" }, "editoptions": { "value": ":[All];MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;Severe:Severe;Descendants:Descendants;Light:Light;None:None" }, "searchrules": {} }, { "name": "copied_files", "label": "Copied Files", "width": 150, "hidden": true, "index": "copied_files", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "linked_files", "label": "Linked Files", "width": 150, "hidden": true, "index": "linked_files", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "post_session_log_file", "label": "Post Session Log File", "width": 150, "hidden": true, "index": "post_session_log_file", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "pre_session_script", "label": "Pre Session Script", "width": 150, "hidden": true, "index": "pre_session_script", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "start_session_command", "label": "Start Session Command", "width": 150, "hidden": true, "index": "start_session_command", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, 
            { "name": "drm_xml_dir", "label": "Drm Xml Dir", "width": 150, "hidden": true, "index": "drm_xml_dir", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "end_time", "label": "End Time", "width": 150, "hidden": false, "index": "end_time", "editable": true, "sorttype": "date", "edittype": "date", "formatter": "date", "formatoptions": { "srcformat": "U/1000", "newformat": "m/d/Y H:i:s" }, "searchoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "editoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "searchrules": { "date": true } }, { "name": "hdl_files", "label": "Hdl Files", "width": 150, "hidden": true, "index": "hdl_files", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "owner", "label": "Owner", "width": 150, "hidden": false, "index": "owner", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "queuing_policy", "label": "Queuing Policy", "width": 150, "hidden": true, "index": "queuing_policy", "editable": true, "edittype": "select", "stype": "select", "searchoptions": { "value": ":[All];SHORT2LONG:SHORT2LONG;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;VSIF_ORDER:VSIF_ORDER;ROUND_ROBIN:ROUND_ROBIN;LONG2SHORT:LONG2SHORT" }, "editoptions": { "value": ":[All];SHORT2LONG:SHORT2LONG;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;VSIF_ORDER:VSIF_ORDER;ROUND_ROBIN:ROUND_ROBIN;LONG2SHORT:LONG2SHORT" }, "searchrules": {} }, { "name": "post_session_drm", "label": "Post Session Drm", "width": 150, "hidden": true, "index": "post_session_drm", "editable": true, "edittype": "select", "stype": "select", "searchoptions": { "value": ":[All];PARALLEL_LOCAL:PARALLEL_LOCAL;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;SGE:SGE;SERIAL_LOCAL:SERIAL_LOCAL;LOADLEVELER:LOADLEVELER;LSF:LSF;USER_DEFINED:USER_DEFINED" }, "editoptions": { "value": ":[All];PARALLEL_LOCAL:PARALLEL_LOCAL;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;SGE:SGE;SERIAL_LOCAL:SERIAL_LOCAL;LOADLEVELER:LOADLEVELER;LSF:LSF;USER_DEFINED:USER_DEFINED" }, "searchrules": {} }, { "name": "original_vsif", "label": "Original Vsif", "width": 150, "hidden": true, "index": "original_vsif", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "comment", "label": "Comment", "width": 150, "hidden": true, "index": "comment", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "run_mode", "label": "Run Mode", "width": 150, "hidden": true, "index": "run_mode", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "parsed_vsif", "label": "Parsed Vsif", "width": 150, "hidden": true, "index": "parsed_vsif", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "PseudoConfigurableAttributeDescriptorrunning_latest", "label": "#Running", "width": 150, "hidden": true, "index": "PseudoConfigurableAttributeDescriptorrunning_latest", "editable": true, "searchoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "editoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "searchrules": { "integer": true } }, { "name": "master_submission_policy", "label": "Master Submission Policy", "width": 150, "hidden": true, "index": "master_submission_policy", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "PseudoConfigurableAttributeDescriptortotal_runs_in_session_latest", "label": "Total Runs", "width": 150, "hidden": true, "index": "PseudoConfigurableAttributeDescriptortotal_runs_in_session_latest", "editable": true, "searchoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "editoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "searchrules": { "integer": true } }, { "name": "model_dir", "label": "Model Dir", "width": 150, "hidden": true, "index": "model_dir", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "top_dir", "label": "Top Dir", "width": 150, "hidden": true, "index": "top_dir", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "session_source_type", "label": "Source Type", "width": 150, "hidden": true, "index": "session_source_type", "editable": true, "edittype": "select", "stype": "select", "searchoptions": { "value": ":[All];snapshot_cumulative:snapshot_cumulative;partial_collect:partial_collect;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;compact:compact;snapshot_cumulative_compact:snapshot_cumulative_compact;snapshot_compact:snapshot_compact;launch:launch;partial_compact:partial_compact;import_vsof:import_vsof;import_vsofx:import_vsofx;collect:collect" }, "editoptions": { "value": ":[All];snapshot_cumulative:snapshot_cumulative;partial_collect:partial_collect;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;compact:compact;snapshot_cumulative_compact:snapshot_cumulative_compact;snapshot_compact:snapshot_compact;launch:launch;partial_compact:partial_compact;import_vsof:import_vsof;import_vsofx:import_vsofx;collect:collect" }, "searchrules": {} }, { "name": "precious_env_vars", "label": "Precious Env. Variables", "width": 150, "hidden": true, "index": "precious_env_vars", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "version", "label": "Version", "width": 150, "hidden": true, "index": "version", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "verification_scope", "label": "Verification Scope", "width": 150, "hidden": true, "index": "verification_scope", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "id", "label": "ID", "width": 150, "hidden": true, "index": "id", "key": true, "editable": true, "searchoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "editoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "searchrules": {} }, { "name": "db_insertion_priority", "label": "DB Insertion Priority", "width": 150, "hidden": true, "index": "db_insertion_priority", "editable": true, "edittype": "select", "stype": "select", "searchoptions": { "value": ":[All];MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;MED:MED;HIGH:HIGH;LOW:LOW" }, "editoptions": { "value": ":[All];MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;MED:MED;HIGH:HIGH;LOW:LOW" }, "searchrules": {} }, { "name": "pre_session_dispatch_parameters", "label": "Pre Session Dispatch Parameters", "width": 150, "hidden": true, "index": "pre_session_dispatch_parameters", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "drm", "label": "Drm", "width": 150, "hidden": true, "index": "drm", "editable": true, "edittype": "select", "stype": "select", "searchoptions": { "value": ":[All];PARALLEL_LOCAL:PARALLEL_LOCAL;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;SGE:SGE;SERIAL_LOCAL:SERIAL_LOCAL;LOADLEVELER:LOADLEVELER;LSF:LSF;USER_DEFINED:USER_DEFINED" }, "editoptions": { "value": ":[All];PARALLEL_LOCAL:PARALLEL_LOCAL;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;SGE:SGE;SERIAL_LOCAL:SERIAL_LOCAL;LOADLEVELER:LOADLEVELER;LSF:LSF;USER_DEFINED:USER_DEFINED" }, "searchrules": {} }, { "name": "top_files", "label": "Top Files", "width": 150, "hidden": true, "index": "top_files", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "log_file", "label": "Log File", "width": 150, "hidden": true, "index": "log_file", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "name", "label": "Name", "width": 150, "hidden": false, "index": "name", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "session_type", "label": "Type", "width": 150, "hidden": true, "index": "session_type", "editable": true, "edittype": "select", "stype": "select", "searchoptions": { "value": ":[All];single_subrun:single_subrun;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;single_run:single_run;show_coverage:show_coverage;collected:collected;runner:runner;vm_scan:vm_scan" }, "editoptions": { "value": ":[All];single_subrun:single_subrun;MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;single_run:single_run;show_coverage:show_coverage;collected:collected;runner:runner;vm_scan:vm_scan" }, "searchrules": {} }, { "name": "default_dispatch_parameters", "label": "Default Dispatch Parameters", "width": 150, "hidden": true, "index": "default_dispatch_parameters", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "post_session_dispatch_parameters", "label": "Post Session Dispatch Parameters", "width": 150, "hidden": true, "index": "post_session_dispatch_parameters", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "PseudoConfigurableAttributeDescriptorfailed_runs_latest", "label": "#Failed", "width": 150, "hidden": true, "index": "PseudoConfigurableAttributeDescriptorfailed_runs_latest", "editable": true, "searchoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "editoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "searchrules": { "integer": true } }, { "name": "duration", "label": "Duration (sec.)", "width": 150, "hidden": true, "index": "duration", "editable": true, "searchoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "editoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "searchrules": {} }, { "name": "number_of_entities", "label": "Number Of Entities", "width": 150, "hidden": true, "index": "number_of_entities", "editable": true, "searchoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "editoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "searchrules": { "integer": true } }, { "name": "automation_file", "label": "Automation File", "width": 150, "hidden": true, "index": "automation_file", "editable": true, "searchoptions": { "sopt": ["cn", "eq", "ne"] }, "editoptions": { "sopt": ["cn", "eq", "ne"] }, "searchrules": {} }, { "name": "start_time", "label": "Start Time", "width": 150, "hidden": false, "index": "start_time", "editable": true, "sorttype": "date", "edittype": "date", "formatter": "date", "formatoptions": { "srcformat": "U/1000", "newformat": "m/d/Y H:i:s" }, "searchoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "editoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "searchrules": { "date": true } }, { "name": "PseudoConfigurableAttributeDescriptorpassed_runs_latest", "label": "#Passed", "width": 150, "hidden": true, "index": "PseudoConfigurableAttributeDescriptorpassed_runs_latest", "editable": true, "searchoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "editoptions": { "sopt": ["eq", "ne", "lt", "le", "gt", "ge"] }, "searchrules": { "integer": true } }, { "name": "free_hosts", "label": "Free Hosts", "width": 150, "hidden": true, "index": "free_hosts", "editable": true, "edittype": "select", "stype": "select", "searchoptions": { "value": ":[All];MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;FALSE:FALSE;TRUE:TRUE" }, "editoptions": { "value": ":[All];MIXED_GROUP_VALUE:MIXED_GROUP_VALUE;FALSE:FALSE;TRUE:TRUE" }, "searchrules": {} }
        ],
        viewrecords: true, // show the current page, data rang and total records on the toolbar
        caption: "Load jqGrid through Javascript Array",
        pager: "#jqGridPager",
        autowidth: false
    });
    $('#jqGrid').jqGrid('filterToolbar', { stringResult: true });
    $('#jqGrid').jqGrid('navGrid', "#jqGridPager", {
        search: false, // show search button on the toolbar
        add: false,
        edit: false,
        del: false,
        refresh: true
    });
    $('#jqGrid').jqGrid('navButtonAdd', "#jqGridPager", {
        caption: "Columns",
        buttonicon: "ui-icon-calculator",
        title: "Choose columns",
        onClickButton: function() {

            $('#jqGrid').jqGrid('columnChooser', {
                width: 550,
                dialog_opts: {
                    modal: true,
                    minWidth: 470,
                    height: 470,
                    show: 'blind',
                    hide: 'explode',
                    dividerLocation: 0.5
                },
                done : function(perm) {
                    if (perm) {
                        console.info(perm);
                       /* $("#jqGrid").jqGrid({width:500,shrinkToFit:false,autowidth:true});*/
                       console.info(getColProperties("jqGrid"));
                       console.info(getColNameProperties("jqGrid"));
                       var colModels=$("#jqGrid").jqGrid('getGridParam','colModel');
                       // console.info(colModels);
                       var colNames = $("#jqGrid").jqGrid('getGridParam','colNames');
                       // console.info(colNames);
                       substr();
                    } else {

                    }
                }



            });

        }

    });

    function getColProperties(id){
            var b = $("#"+id)[0];
            var params = b.p.colModel;
            var cols = params[0].name;
            console.info(params);
            for ( var i = 1; i < params.length; i++) {
                if (!params[i].hidden) {
                    console.info( "是否隐藏：" + params[i].hidden);
                    cols += "," + params[i].name;
                    console.info("非隐藏列：" + cols);
                }

            }

            return cols;
        }
        function getColNameProperties(id){
            var b = $("#"+id)[0];
            var colNames = b.p.colNames;
            var colModels = b.p.colModel;
            var newColumnName = [];
            for (var i = 0; i < colNames.length; i++) {
                var columnHidden = colModels[i].hidden;
                if (!columnHidden) {
                    newColumnName.push(colNames[i]);
                    console.info(colNames[i]);
                }
            }
            console.info(newColumnName);
            return newColumnName;
        }

        function substr() {
            var str = "parentInvestId,contractNo,clientUserId";
            console.info("逗号第一次出现的位置：" + str.indexOf(','));
            console.info(str.substring(str.indexOf(',') + 1,str.length));
        }
        

});
