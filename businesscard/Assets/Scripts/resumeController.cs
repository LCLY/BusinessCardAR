using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class resumeController : MonoBehaviour
{
    public GameObject resumeObj;
    public void zoomIn()
    {
        if (resumeObj.transform.localScale.x > 5)
        {
            //do nothing
        }
        else
        {
            resumeObj.transform.localScale += new Vector3(0.5F, 0, 0.5F);
        }
    }

    public void zoomOut()
    {
        if(resumeObj.transform.localScale.x <= 1.5)
        {
            //do nothing
        }
        else
        {
            resumeObj.transform.localScale -= new Vector3(0.5F, 0, 0.5F);
        }
        
    }

    // Update is called once per frame
    void Update()
    {
        Debug.Log("x" + resumeObj.transform.localScale.x);
        Debug.Log("y" + resumeObj.transform.localScale.y);
        Debug.Log("z" + resumeObj.transform.localScale.z);
    }
}
