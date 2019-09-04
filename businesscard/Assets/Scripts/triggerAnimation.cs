using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class triggerAnimation : MonoBehaviour
{
    public GameObject charObj;
    Animator charAnim;
    // Start is called before the first frame update
    void Start()
    {
       charAnim = charObj.GetComponent<Animator>();
        
    }

    public void WaveAnim()
    {
        charAnim.SetTrigger("Wave");
    }

    public void PickUpAnim()
    {
        charAnim.SetTrigger("Pickup");
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
